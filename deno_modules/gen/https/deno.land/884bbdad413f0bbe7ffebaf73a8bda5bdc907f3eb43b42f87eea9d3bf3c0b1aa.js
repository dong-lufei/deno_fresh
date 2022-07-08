import { extname, fromFileUrl, mediaTypeLookup, router, toFileUrl, walk, } from "./deps.ts";
import { h } from "preact";
import { Bundler } from "./bundle.ts";
import { ALIVE_URL, BUILD_ID, JS_PREFIX, REFRESH_JS_URL } from "./constants.ts";
import DefaultErrorHandler from "./default_error_page.tsx";
import { render as internalRender } from "./render.tsx";
import { SELF } from "../runtime/csp.ts";
import { ASSET_CACHE_BUST_KEY, INTERNAL_PREFIX } from "../runtime/utils.ts";
export class ServerContext {
    #dev;
    #routes;
    #islands;
    #staticFiles;
    #bundler;
    #renderFn;
    #middlewares;
    #app;
    #notFound;
    #error;
    constructor(routes, islands, staticFiles, renderfn, middlewares, app, notFound, error, importMapURL) {
        this.#routes = routes;
        this.#islands = islands;
        this.#staticFiles = staticFiles;
        this.#renderFn = renderfn;
        this.#middlewares = middlewares;
        this.#app = app;
        this.#notFound = notFound;
        this.#error = error;
        this.#bundler = new Bundler(this.#islands, importMapURL);
        this.#dev = typeof Deno.env.get("DENO_DEPLOYMENT_ID") !== "string";
    }
    static async fromManifest(manifest, opts) {
        const baseUrl = new URL("./", manifest.baseUrl).href;
        const importMapURL = new URL("./import_map.json", manifest.baseUrl);
        const routes = [];
        const islands = [];
        const middlewares = [];
        let app = DEFAULT_APP;
        let notFound = DEFAULT_NOT_FOUND;
        let error = DEFAULT_ERROR;
        for (const [self, module] of Object.entries(manifest.routes)) {
            const url = new URL(self, baseUrl).href;
            if (!url.startsWith(baseUrl)) {
                throw new TypeError("Page is not a child of the basepath.");
            }
            const path = url.substring(baseUrl.length).substring("routes".length);
            const baseRoute = path.substring(1, path.length - extname(path).length);
            const name = baseRoute.replace("/", "-");
            const isMiddleware = path.endsWith("/_middleware.tsx") ||
                path.endsWith("/_middleware.ts") || path.endsWith("/_middleware.jsx") ||
                path.endsWith("/_middleware.js");
            if (!path.startsWith("/_") && !isMiddleware) {
                const { default: component, config } = module;
                let pattern = pathToPattern(baseRoute);
                if (config?.routeOverride) {
                    pattern = String(config.routeOverride);
                }
                let { handler } = module;
                handler ??= {};
                if (component &&
                    typeof handler === "object" && handler.GET === undefined) {
                    handler.GET = (_req, { render }) => render();
                }
                const route = {
                    pattern,
                    url,
                    name,
                    component,
                    handler,
                    csp: Boolean(config?.csp ?? false),
                };
                routes.push(route);
            }
            else if (isMiddleware) {
                middlewares.push({
                    ...middlewarePathToPattern(baseRoute),
                    ...module,
                });
            }
            else if (path === "/_app.tsx" || path === "/_app.ts" ||
                path === "/_app.jsx" || path === "/_app.js") {
                app = module;
            }
            else if (path === "/_404.tsx" || path === "/_404.ts" ||
                path === "/_404.jsx" || path === "/_404.js") {
                const { default: component, config } = module;
                let { handler } = module;
                if (component && handler === undefined) {
                    handler = (_req, { render }) => render();
                }
                notFound = {
                    pattern: pathToPattern(baseRoute),
                    url,
                    name,
                    component,
                    handler: handler ?? ((req) => router.defaultOtherHandler(req)),
                    csp: Boolean(config?.csp ?? false),
                };
            }
            else if (path === "/_500.tsx" || path === "/_500.ts" ||
                path === "/_500.jsx" || path === "/_500.js") {
                const { default: component, config } = module;
                let { handler } = module;
                if (component && handler === undefined) {
                    handler = (_req, { render }) => render();
                }
                error = {
                    pattern: pathToPattern(baseRoute),
                    url,
                    name,
                    component,
                    handler: handler ??
                        ((req, ctx) => router.defaultErrorHandler(req, ctx, ctx.error)),
                    csp: Boolean(config?.csp ?? false),
                };
            }
        }
        sortRoutes(routes);
        sortRoutes(middlewares);
        for (const [self, module] of Object.entries(manifest.islands)) {
            const url = new URL(self, baseUrl).href;
            if (!url.startsWith(baseUrl)) {
                throw new TypeError("Island is not a child of the basepath.");
            }
            const path = url.substring(baseUrl.length).substring("islands".length);
            const baseRoute = path.substring(1, path.length - extname(path).length);
            const name = baseRoute.replace("/", "");
            const id = name.toLowerCase();
            if (typeof module.default !== "function") {
                throw new TypeError(`Islands must default export a component ('${self}').`);
            }
            islands.push({ id, name, url, component: module.default });
        }
        const staticFiles = [];
        try {
            const staticFolder = new URL("./static", manifest.baseUrl);
            for await (const _ of Deno.readDir(fromFileUrl(staticFolder))) {
            }
            const entires = walk(fromFileUrl(staticFolder), {
                includeFiles: true,
                includeDirs: false,
                followSymlinks: false,
            });
            const encoder = new TextEncoder();
            for await (const entry of entires) {
                const localUrl = toFileUrl(entry.path);
                const path = localUrl.href.substring(staticFolder.href.length);
                const stat = await Deno.stat(localUrl);
                const contentType = mediaTypeLookup(extname(path)) ??
                    "application/octet-stream";
                const etag = await crypto.subtle.digest("SHA-1", encoder.encode(BUILD_ID + path)).then((hash) => Array.from(new Uint8Array(hash))
                    .map((byte) => byte.toString(16).padStart(2, "0"))
                    .join(""));
                const staticFile = {
                    localUrl,
                    path,
                    size: stat.size,
                    contentType,
                    etag,
                };
                staticFiles.push(staticFile);
            }
        }
        catch (err) {
            if (err instanceof Deno.errors.NotFound) {
            }
            else {
                throw err;
            }
        }
        return new ServerContext(routes, islands, staticFiles, opts.render ?? DEFAULT_RENDER_FN, middlewares, app, notFound, error, importMapURL);
    }
    handler() {
        const inner = router.router(...this.#handlers());
        const withMiddlewares = this.#composeMiddlewares(this.#middlewares);
        return function handler(req, connInfo) {
            const url = new URL(req.url);
            if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
                url.pathname = url.pathname.slice(0, -1);
                return Response.redirect(url.href, 307);
            }
            return withMiddlewares(req, connInfo, inner);
        };
    }
    #composeMiddlewares(middlewares) {
        return (req, connInfo, inner) => {
            const mws = selectMiddlewares(req.url, middlewares);
            const handlers = [];
            const ctx = {
                next() {
                    const handler = handlers.shift();
                    return Promise.resolve(handler());
                },
                ...connInfo,
                state: {},
            };
            for (const mw of mws) {
                handlers.push(() => mw.handler(req, ctx));
            }
            handlers.push(() => inner(req, ctx));
            const handler = handlers.shift();
            return handler();
        };
    }
    #handlers() {
        const routes = {};
        routes[`${INTERNAL_PREFIX}${JS_PREFIX}/${BUILD_ID}/:path*`] = this
            .#bundleAssetRoute();
        if (this.#dev) {
            routes[REFRESH_JS_URL] = () => {
                const js = `let reloading = false; const buildId = "${BUILD_ID}"; new EventSource("${ALIVE_URL}").addEventListener("message", (e) => { if (e.data !== buildId && !reloading) { reloading = true; location.reload(); } });`;
                return new Response(new TextEncoder().encode(js), {
                    headers: {
                        "content-type": "application/javascript; charset=utf-8",
                    },
                });
            };
            routes[ALIVE_URL] = () => {
                let timerId = undefined;
                const body = new ReadableStream({
                    start(controller) {
                        controller.enqueue(`data: ${BUILD_ID}\nretry: 100\n\n`);
                        timerId = setInterval(() => {
                            controller.enqueue(`data: ${BUILD_ID}\n\n`);
                        }, 1000);
                    },
                    cancel() {
                        if (timerId !== undefined) {
                            clearInterval(timerId);
                        }
                    },
                });
                return new Response(body.pipeThrough(new TextEncoderStream()), {
                    headers: {
                        "content-type": "text/event-stream",
                    },
                });
            };
        }
        for (const { localUrl, path, size, contentType, etag } of this.#staticFiles) {
            const route = sanitizePathToRegex(path);
            routes[`GET@${route}`] = this.#staticFileHandler(localUrl, size, contentType, etag);
        }
        const genRender = (route, status) => {
            const imports = [];
            if (this.#dev) {
                imports.push(REFRESH_JS_URL);
            }
            return (req, params, error) => {
                return async (data) => {
                    if (route.component === undefined) {
                        throw new Error("This page does not have a component to render.");
                    }
                    const preloads = [];
                    const resp = await internalRender({
                        route,
                        islands: this.#islands,
                        app: this.#app,
                        imports,
                        preloads,
                        renderFn: this.#renderFn,
                        url: new URL(req.url),
                        params,
                        data,
                        error,
                    });
                    const headers = {
                        "content-type": "text/html; charset=utf-8",
                    };
                    const [body, csp] = resp;
                    if (csp) {
                        if (this.#dev) {
                            csp.directives.connectSrc = [
                                ...(csp.directives.connectSrc ?? []),
                                SELF,
                            ];
                        }
                        const directive = serializeCSPDirectives(csp.directives);
                        if (csp.reportOnly) {
                            headers["content-security-policy-report-only"] = directive;
                        }
                        else {
                            headers["content-security-policy"] = directive;
                        }
                    }
                    return new Response(body, { status, headers });
                };
            };
        };
        for (const route of this.#routes) {
            const createRender = genRender(route, 200);
            if (typeof route.handler === "function") {
                routes[route.pattern] = (req, ctx, params) => route.handler(req, {
                    ...ctx,
                    params,
                    render: createRender(req, params),
                });
            }
            else {
                for (const [method, handler] of Object.entries(route.handler)) {
                    routes[`${method}@${route.pattern}`] = (req, ctx, params) => handler(req, {
                        ...ctx,
                        params,
                        render: createRender(req, params),
                    });
                }
            }
        }
        const unknownHandlerRender = genRender(this.#notFound, 404);
        const unknownHandler = (req, ctx) => this.#notFound.handler(req, {
            ...ctx,
            render: unknownHandlerRender(req, {}),
        });
        const errorHandlerRender = genRender(this.#error, 500);
        const errorHandler = (req, ctx, error) => {
            console.error("%cAn error occured during route handling or page rendering.", "color:red", error);
            return this.#error.handler(req, {
                ...ctx,
                error,
                render: errorHandlerRender(req, {}, error),
            });
        };
        return [routes, unknownHandler, errorHandler];
    }
    #staticFileHandler(localUrl, size, contentType, etag) {
        return async (req) => {
            const url = new URL(req.url);
            const key = url.searchParams.get(ASSET_CACHE_BUST_KEY);
            if (key !== null && BUILD_ID !== key) {
                url.searchParams.delete(ASSET_CACHE_BUST_KEY);
                const location = url.pathname + url.search;
                return new Response("", {
                    status: 307,
                    headers: {
                        "content-type": "text/plain",
                        location,
                    },
                });
            }
            const headers = new Headers({
                "content-type": contentType,
                etag,
                vary: "If-None-Match",
            });
            if (key !== null) {
                headers.set("Cache-Control", "public, max-age=31536000, immutable");
            }
            const ifNoneMatch = req.headers.get("if-none-match");
            if (ifNoneMatch === etag || ifNoneMatch === "W/" + etag) {
                return new Response(null, { status: 304, headers });
            }
            else {
                const file = await Deno.open(localUrl);
                headers.set("content-length", String(size));
                return new Response(file.readable, { headers });
            }
        };
    }
    #bundleAssetRoute = () => {
        return async (_req, _ctx, params) => {
            const path = `/${params.path}`;
            const file = await this.#bundler.get(path);
            let res;
            if (file) {
                const headers = new Headers({
                    "Cache-Control": "public, max-age=604800, immutable",
                });
                const contentType = mediaTypeLookup(path);
                if (contentType) {
                    headers.set("Content-Type", contentType);
                }
                res = new Response(file, {
                    status: 200,
                    headers,
                });
            }
            return res ?? new Response(null, {
                status: 404,
            });
        };
    };
}
const DEFAULT_RENDER_FN = (_ctx, render) => {
    render();
};
const DEFAULT_APP = {
    default: ({ Component }) => h(Component, {}),
};
const DEFAULT_NOT_FOUND = {
    pattern: "",
    url: "",
    name: "_404",
    handler: (req) => router.defaultOtherHandler(req),
    csp: false,
};
const DEFAULT_ERROR = {
    pattern: "",
    url: "",
    name: "_500",
    component: DefaultErrorHandler,
    handler: (_req, ctx) => ctx.render(),
    csp: false,
};
export function selectMiddlewares(url, middlewares) {
    const selectedMws = [];
    const reqURL = new URL(url);
    for (const { compiledPattern, handler } of middlewares) {
        const res = compiledPattern.exec(reqURL);
        if (res) {
            selectedMws.push({ handler });
        }
    }
    return selectedMws;
}
function sortRoutes(routes) {
    routes.sort((a, b) => {
        const partsA = a.pattern.split("/");
        const partsB = b.pattern.split("/");
        for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
            const partA = partsA[i];
            const partB = partsB[i];
            if (partA === undefined)
                return -1;
            if (partB === undefined)
                return 1;
            if (partA === partB)
                continue;
            const priorityA = partA.startsWith(":") ? partA.endsWith("*") ? 0 : 1 : 2;
            const priorityB = partB.startsWith(":") ? partB.endsWith("*") ? 0 : 1 : 2;
            return Math.max(Math.min(priorityB - priorityA, 1), -1);
        }
        return 0;
    });
}
function pathToPattern(path) {
    const parts = path.split("/");
    if (parts[parts.length - 1] === "index") {
        parts.pop();
    }
    const route = "/" + parts
        .map((part) => {
        if (part.startsWith("[...") && part.endsWith("]")) {
            return `:${part.slice(4, part.length - 1)}*`;
        }
        if (part.startsWith("[") && part.endsWith("]")) {
            return `:${part.slice(1, part.length - 1)}`;
        }
        return part;
    })
        .join("/");
    return route;
}
export function normalizeURLPath(path) {
    try {
        const pathUrl = new URL("file:///");
        pathUrl.pathname = path;
        return pathUrl.pathname;
    }
    catch {
        return null;
    }
}
function sanitizePathToRegex(path) {
    return path
        .replaceAll("\*", "\\*")
        .replaceAll("\+", "\\+")
        .replaceAll("\?", "\\?")
        .replaceAll("\{", "\\{")
        .replaceAll("\}", "\\}")
        .replaceAll("\(", "\\(")
        .replaceAll("\)", "\\)")
        .replaceAll("\:", "\\:");
}
function serializeCSPDirectives(csp) {
    return Object.entries(csp)
        .filter(([_key, value]) => value !== undefined)
        .map(([k, v]) => {
        const key = k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
        const value = Array.isArray(v) ? v.join(" ") : v;
        return `${key} ${value}`;
    })
        .join("; ");
}
export function middlewarePathToPattern(baseRoute) {
    baseRoute = baseRoute.slice(0, -"_middleware".length);
    let pattern = pathToPattern(baseRoute);
    if (pattern.endsWith("/")) {
        pattern = pattern.slice(0, -1) + "{/*}?";
    }
    const compiledPattern = new URLPattern({ pathname: pattern });
    return { pattern, compiledPattern };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLE9BQU8sRUFDUCxXQUFXLEVBQ1gsZUFBZSxFQUVmLE1BQU0sRUFDTixTQUFTLEVBQ1QsSUFBSSxHQUNMLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFM0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEYsT0FBTyxtQkFBbUIsTUFBTSwwQkFBMEIsQ0FBQztBQWlCM0QsT0FBTyxFQUFFLE1BQU0sSUFBSSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEQsT0FBTyxFQUFtQyxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFtQjVFLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLElBQUksQ0FBVTtJQUNkLE9BQU8sQ0FBVTtJQUNqQixRQUFRLENBQVc7SUFDbkIsWUFBWSxDQUFlO0lBQzNCLFFBQVEsQ0FBVTtJQUNsQixTQUFTLENBQWlCO0lBQzFCLFlBQVksQ0FBb0I7SUFDaEMsSUFBSSxDQUFZO0lBQ2hCLFNBQVMsQ0FBYztJQUN2QixNQUFNLENBQVk7SUFFbEIsWUFDRSxNQUFlLEVBQ2YsT0FBaUIsRUFDakIsV0FBeUIsRUFDekIsUUFBd0IsRUFDeEIsV0FBOEIsRUFDOUIsR0FBYyxFQUNkLFFBQXFCLEVBQ3JCLEtBQWdCLEVBQ2hCLFlBQWlCO1FBRWpCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElB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LE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQztBQUN0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29ubkluZm8sXG4gIGV4dG5hbWUsXG4gIGZyb21GaWxlVXJsLFxuICBtZWRpYVR5cGVMb29rdXAsXG4gIFJlcXVlc3RIYW5kbGVyLFxuICByb3V0ZXIsXG4gIHRvRmlsZVVybCxcbiAgd2Fsayxcbn0gZnJvbSBcIi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IE1hbmlmZXN0IH0gZnJvbSBcIi4vbW9kLnRzXCI7XG5pbXBvcnQgeyBCdW5kbGVyIH0gZnJvbSBcIi4vYnVuZGxlLnRzXCI7XG5pbXBvcnQgeyBBTElWRV9VUkwsIEJVSUxEX0lELCBKU19QUkVGSVgsIFJFRlJFU0hfSlNfVVJMIH0gZnJvbSBcIi4vY29uc3RhbnRzLnRzXCI7XG5pbXBvcnQgRGVmYXVsdEVycm9ySGFuZGxlciBmcm9tIFwiLi9kZWZhdWx0X2Vycm9yX3BhZ2UudHN4XCI7XG5pbXBvcnQge1xuICBBcHBNb2R1bGUsXG4gIEVycm9yUGFnZSxcbiAgRXJyb3JQYWdlTW9kdWxlLFxuICBGcmVzaE9wdGlvbnMsXG4gIEhhbmRsZXIsXG4gIElzbGFuZCxcbiAgTWlkZGxld2FyZSxcbiAgTWlkZGxld2FyZU1vZHVsZSxcbiAgTWlkZGxld2FyZVJvdXRlLFxuICBSZW5kZXJGdW5jdGlvbixcbiAgUm91dGUsXG4gIFJvdXRlTW9kdWxlLFxuICBVbmtub3duUGFnZSxcbiAgVW5rbm93blBhZ2VNb2R1bGUsXG59IGZyb20gXCIuL3R5cGVzLnRzXCI7XG5pbXBvcnQgeyByZW5kZXIgYXMgaW50ZXJuYWxSZW5kZXIgfSBmcm9tIFwiLi9yZW5kZXIudHN4XCI7XG5pbXBvcnQgeyBDb250ZW50U2VjdXJpdHlQb2xpY3lEaXJlY3RpdmVzLCBTRUxGIH0gZnJvbSBcIi4uL3J1bnRpbWUvY3NwLnRzXCI7XG5pbXBvcnQgeyBBU1NFVF9DQUNIRV9CVVNUX0tFWSwgSU5URVJOQUxfUFJFRklYIH0gZnJvbSBcIi4uL3J1bnRpbWUvdXRpbHMudHNcIjtcblxuaW50ZXJmYWNlIFJvdXRlclN0YXRlIHtcbiAgc3RhdGU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xufVxuXG5pbnRlcmZhY2UgU3RhdGljRmlsZSB7XG4gIC8qKiBUaGUgVVJMIHRvIHRoZSBzdGF0aWMgZmlsZSBvbiBkaXNrLiAqL1xuICBsb2NhbFVybDogVVJMO1xuICAvKiogVGhlIHBhdGggdG8gdGhlIGZpbGUgYXMgaXQgd291bGQgYmUgaW4gdGhlIGluY29taW5nIHJlcXVlc3QuICovXG4gIHBhdGg6IHN0cmluZztcbiAgLyoqIFRoZSBzaXplIG9mIHRoZSBmaWxlLiAqL1xuICBzaXplOiBudW1iZXI7XG4gIC8qKiBUaGUgY29udGVudC10eXBlIG9mIHRoZSBmaWxlLiAqL1xuICBjb250ZW50VHlwZTogc3RyaW5nO1xuICAvKiogSGFzaCBvZiB0aGUgZmlsZSBjb250ZW50cy4gKi9cbiAgZXRhZzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2VydmVyQ29udGV4dCB7XG4gICNkZXY6IGJvb2xlYW47XG4gICNyb3V0ZXM6IFJvdXRlW107XG4gICNpc2xhbmRzOiBJc2xhbmRbXTtcbiAgI3N0YXRpY0ZpbGVzOiBTdGF0aWNGaWxlW107XG4gICNidW5kbGVyOiBCdW5kbGVyO1xuICAjcmVuZGVyRm46IFJlbmRlckZ1bmN0aW9uO1xuICAjbWlkZGxld2FyZXM6IE1pZGRsZXdhcmVSb3V0ZVtdO1xuICAjYXBwOiBBcHBNb2R1bGU7XG4gICNub3RGb3VuZDogVW5rbm93blBhZ2U7XG4gICNlcnJvcjogRXJyb3JQYWdlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvdXRlczogUm91dGVbXSxcbiAgICBpc2xhbmRzOiBJc2xhbmRbXSxcbiAgICBzdGF0aWNGaWxlczogU3RhdGljRmlsZVtdLFxuICAgIHJlbmRlcmZuOiBSZW5kZXJGdW5jdGlvbixcbiAgICBtaWRkbGV3YXJlczogTWlkZGxld2FyZVJvdXRlW10sXG4gICAgYXBwOiBBcHBNb2R1bGUsXG4gICAgbm90Rm91bmQ6IFVua25vd25QYWdlLFxuICAgIGVycm9yOiBFcnJvclBhZ2UsXG4gICAgaW1wb3J0TWFwVVJMOiBVUkwsXG4gICkge1xuICAgIHRoaXMuI3JvdXRlcyA9IHJvdXRlcztcbiAgICB0aGlzLiNpc2xhbmRzID0gaXNsYW5kcztcbiAgICB0aGlzLiNzdGF0aWNGaWxlcyA9IHN0YXRpY0ZpbGVzO1xuICAgIHRoaXMuI3JlbmRlckZuID0gcmVuZGVyZm47XG4gICAgdGhpcy4jbWlkZGxld2FyZXMgPSBtaWRkbGV3YXJlcztcbiAgICB0aGlzLiNhcHAgPSBhcHA7XG4gICAgdGhpcy4jbm90Rm91bmQgPSBub3RGb3VuZDtcbiAgICB0aGlzLiNlcnJvciA9IGVycm9yO1xuICAgIHRoaXMuI2J1bmRsZXIgPSBuZXcgQnVuZGxlcih0aGlzLiNpc2xhbmRzLCBpbXBvcnRNYXBVUkwpO1xuICAgIHRoaXMuI2RldiA9IHR5cGVvZiBEZW5vLmVudi5nZXQoXCJERU5PX0RFUExPWU1FTlRfSURcIikgIT09IFwic3RyaW5nXCI7IC8vIEVudiB2YXIgaXMgb25seSBzZXQgaW4gcHJvZCAob24gRGVwbG95KS5cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHRoZSBtYW5pZmVzdCBpbnRvIGluZGl2aWR1YWwgY29tcG9uZW50cyBhbmQgcGFnZXMuXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZnJvbU1hbmlmZXN0KFxuICAgIG1hbmlmZXN0OiBNYW5pZmVzdCxcbiAgICBvcHRzOiBGcmVzaE9wdGlvbnMsXG4gICk6IFByb21pc2U8U2VydmVyQ29udGV4dD4ge1xuICAgIC8vIEdldCB0aGUgbWFuaWZlc3QnIGJhc2UgVVJMLlxuICAgIGNvbnN0IGJhc2VVcmwgPSBuZXcgVVJMKFwiLi9cIiwgbWFuaWZlc3QuYmFzZVVybCkuaHJlZjtcbiAgICBjb25zdCBpbXBvcnRNYXBVUkwgPSBuZXcgVVJMKFwiLi9pbXBvcnRfbWFwLmpzb25cIiwgbWFuaWZlc3QuYmFzZVVybCk7XG5cbiAgICAvLyBFeHRyYWN0IGFsbCByb3V0ZXMsIGFuZCBwcmVwYXJlIHRoZW0gaW50byB0aGUgYFBhZ2VgIHN0cnVjdHVyZS5cbiAgICBjb25zdCByb3V0ZXM6IFJvdXRlW10gPSBbXTtcbiAgICBjb25zdCBpc2xhbmRzOiBJc2xhbmRbXSA9IFtdO1xuICAgIGNvbnN0IG1pZGRsZXdhcmVzOiBNaWRkbGV3YXJlUm91dGVbXSA9IFtdO1xuICAgIGxldCBhcHA6IEFwcE1vZHVsZSA9IERFRkFVTFRfQVBQO1xuICAgIGxldCBub3RGb3VuZDogVW5rbm93blBhZ2UgPSBERUZBVUxUX05PVF9GT1VORDtcbiAgICBsZXQgZXJyb3I6IEVycm9yUGFnZSA9IERFRkFVTFRfRVJST1I7XG4gICAgZm9yIChjb25zdCBbc2VsZiwgbW9kdWxlXSBvZiBPYmplY3QuZW50cmllcyhtYW5pZmVzdC5yb3V0ZXMpKSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNlbGYsIGJhc2VVcmwpLmhyZWY7XG4gICAgICBpZiAoIXVybC5zdGFydHNXaXRoKGJhc2VVcmwpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYWdlIGlzIG5vdCBhIGNoaWxkIG9mIHRoZSBiYXNlcGF0aC5cIik7XG4gICAgICB9XG4gICAgICBjb25zdCBwYXRoID0gdXJsLnN1YnN0cmluZyhiYXNlVXJsLmxlbmd0aCkuc3Vic3RyaW5nKFwicm91dGVzXCIubGVuZ3RoKTtcbiAgICAgIGNvbnN0IGJhc2VSb3V0ZSA9IHBhdGguc3Vic3RyaW5nKDEsIHBhdGgubGVuZ3RoIC0gZXh0bmFtZShwYXRoKS5sZW5ndGgpO1xuICAgICAgY29uc3QgbmFtZSA9IGJhc2VSb3V0ZS5yZXBsYWNlKFwiL1wiLCBcIi1cIik7XG4gICAgICBjb25zdCBpc01pZGRsZXdhcmUgPSBwYXRoLmVuZHNXaXRoKFwiL19taWRkbGV3YXJlLnRzeFwiKSB8fFxuICAgICAgICBwYXRoLmVuZHNXaXRoKFwiL19taWRkbGV3YXJlLnRzXCIpIHx8IHBhdGguZW5kc1dpdGgoXCIvX21pZGRsZXdhcmUuanN4XCIpIHx8XG4gICAgICAgIHBhdGguZW5kc1dpdGgoXCIvX21pZGRsZXdhcmUuanNcIik7XG4gICAgICBpZiAoIXBhdGguc3RhcnRzV2l0aChcIi9fXCIpICYmICFpc01pZGRsZXdhcmUpIHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBjb21wb25lbnQsIGNvbmZpZyB9ID0gKG1vZHVsZSBhcyBSb3V0ZU1vZHVsZSk7XG4gICAgICAgIGxldCBwYXR0ZXJuID0gcGF0aFRvUGF0dGVybihiYXNlUm91dGUpO1xuICAgICAgICBpZiAoY29uZmlnPy5yb3V0ZU92ZXJyaWRlKSB7XG4gICAgICAgICAgcGF0dGVybiA9IFN0cmluZyhjb25maWcucm91dGVPdmVycmlkZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgaGFuZGxlciB9ID0gKG1vZHVsZSBhcyBSb3V0ZU1vZHVsZSk7XG4gICAgICAgIGhhbmRsZXIgPz89IHt9O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcG9uZW50ICYmXG4gICAgICAgICAgdHlwZW9mIGhhbmRsZXIgPT09IFwib2JqZWN0XCIgJiYgaGFuZGxlci5HRVQgPT09IHVuZGVmaW5lZFxuICAgICAgICApIHtcbiAgICAgICAgICBoYW5kbGVyLkdFVCA9IChfcmVxLCB7IHJlbmRlciB9KSA9PiByZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZTogUm91dGUgPSB7XG4gICAgICAgICAgcGF0dGVybixcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBjb21wb25lbnQsXG4gICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICBjc3A6IEJvb2xlYW4oY29uZmlnPy5jc3AgPz8gZmFsc2UpLFxuICAgICAgICB9O1xuICAgICAgICByb3V0ZXMucHVzaChyb3V0ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzTWlkZGxld2FyZSkge1xuICAgICAgICBtaWRkbGV3YXJlcy5wdXNoKHtcbiAgICAgICAgICAuLi5taWRkbGV3YXJlUGF0aFRvUGF0dGVybihiYXNlUm91dGUpLFxuICAgICAgICAgIC4uLm1vZHVsZSBhcyBNaWRkbGV3YXJlTW9kdWxlLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHBhdGggPT09IFwiL19hcHAudHN4XCIgfHwgcGF0aCA9PT0gXCIvX2FwcC50c1wiIHx8XG4gICAgICAgIHBhdGggPT09IFwiL19hcHAuanN4XCIgfHwgcGF0aCA9PT0gXCIvX2FwcC5qc1wiXG4gICAgICApIHtcbiAgICAgICAgYXBwID0gbW9kdWxlIGFzIEFwcE1vZHVsZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHBhdGggPT09IFwiL180MDQudHN4XCIgfHwgcGF0aCA9PT0gXCIvXzQwNC50c1wiIHx8XG4gICAgICAgIHBhdGggPT09IFwiL180MDQuanN4XCIgfHwgcGF0aCA9PT0gXCIvXzQwNC5qc1wiXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBjb21wb25lbnQsIGNvbmZpZyB9ID0gKG1vZHVsZSBhcyBVbmtub3duUGFnZU1vZHVsZSk7XG4gICAgICAgIGxldCB7IGhhbmRsZXIgfSA9IChtb2R1bGUgYXMgVW5rbm93blBhZ2VNb2R1bGUpO1xuICAgICAgICBpZiAoY29tcG9uZW50ICYmIGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGhhbmRsZXIgPSAoX3JlcSwgeyByZW5kZXIgfSkgPT4gcmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBub3RGb3VuZCA9IHtcbiAgICAgICAgICBwYXR0ZXJuOiBwYXRoVG9QYXR0ZXJuKGJhc2VSb3V0ZSksXG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIgPz8gKChyZXEpID0+IHJvdXRlci5kZWZhdWx0T3RoZXJIYW5kbGVyKHJlcSkpLFxuICAgICAgICAgIGNzcDogQm9vbGVhbihjb25maWc/LmNzcCA/PyBmYWxzZSksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBwYXRoID09PSBcIi9fNTAwLnRzeFwiIHx8IHBhdGggPT09IFwiL181MDAudHNcIiB8fFxuICAgICAgICBwYXRoID09PSBcIi9fNTAwLmpzeFwiIHx8IHBhdGggPT09IFwiL181MDAuanNcIlxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogY29tcG9uZW50LCBjb25maWcgfSA9IChtb2R1bGUgYXMgRXJyb3JQYWdlTW9kdWxlKTtcbiAgICAgICAgbGV0IHsgaGFuZGxlciB9ID0gKG1vZHVsZSBhcyBFcnJvclBhZ2VNb2R1bGUpO1xuICAgICAgICBpZiAoY29tcG9uZW50ICYmIGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGhhbmRsZXIgPSAoX3JlcSwgeyByZW5kZXIgfSkgPT4gcmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBlcnJvciA9IHtcbiAgICAgICAgICBwYXR0ZXJuOiBwYXRoVG9QYXR0ZXJuKGJhc2VSb3V0ZSksXG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIgPz9cbiAgICAgICAgICAgICgocmVxLCBjdHgpID0+IHJvdXRlci5kZWZhdWx0RXJyb3JIYW5kbGVyKHJlcSwgY3R4LCBjdHguZXJyb3IpKSxcbiAgICAgICAgICBjc3A6IEJvb2xlYW4oY29uZmlnPy5jc3AgPz8gZmFsc2UpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBzb3J0Um91dGVzKHJvdXRlcyk7XG4gICAgc29ydFJvdXRlcyhtaWRkbGV3YXJlcyk7XG5cbiAgICBmb3IgKGNvbnN0IFtzZWxmLCBtb2R1bGVdIG9mIE9iamVjdC5lbnRyaWVzKG1hbmlmZXN0LmlzbGFuZHMpKSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNlbGYsIGJhc2VVcmwpLmhyZWY7XG4gICAgICBpZiAoIXVybC5zdGFydHNXaXRoKGJhc2VVcmwpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJc2xhbmQgaXMgbm90IGEgY2hpbGQgb2YgdGhlIGJhc2VwYXRoLlwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhdGggPSB1cmwuc3Vic3RyaW5nKGJhc2VVcmwubGVuZ3RoKS5zdWJzdHJpbmcoXCJpc2xhbmRzXCIubGVuZ3RoKTtcbiAgICAgIGNvbnN0IGJhc2VSb3V0ZSA9IHBhdGguc3Vic3RyaW5nKDEsIHBhdGgubGVuZ3RoIC0gZXh0bmFtZShwYXRoKS5sZW5ndGgpO1xuICAgICAgY29uc3QgbmFtZSA9IGJhc2VSb3V0ZS5yZXBsYWNlKFwiL1wiLCBcIlwiKTtcbiAgICAgIGNvbnN0IGlkID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUuZGVmYXVsdCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgYElzbGFuZHMgbXVzdCBkZWZhdWx0IGV4cG9ydCBhIGNvbXBvbmVudCAoJyR7c2VsZn0nKS5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaXNsYW5kcy5wdXNoKHsgaWQsIG5hbWUsIHVybCwgY29tcG9uZW50OiBtb2R1bGUuZGVmYXVsdCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0aWNGaWxlczogU3RhdGljRmlsZVtdID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXRpY0ZvbGRlciA9IG5ldyBVUkwoXCIuL3N0YXRpY1wiLCBtYW5pZmVzdC5iYXNlVXJsKTtcbiAgICAgIC8vIFRPRE8obHVjYWNhc29uYXRvKTogcmVtb3ZlIHRoZSBleHRyYW5pb3VzIERlbm8ucmVhZERpciB3aGVuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZGVub2xhbmQvZGVub19zdGQvaXNzdWVzLzEzMTAgaXMgZml4ZWQuXG4gICAgICBmb3IgYXdhaXQgKGNvbnN0IF8gb2YgRGVuby5yZWFkRGlyKGZyb21GaWxlVXJsKHN0YXRpY0ZvbGRlcikpKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVudGlyZXMgPSB3YWxrKGZyb21GaWxlVXJsKHN0YXRpY0ZvbGRlciksIHtcbiAgICAgICAgaW5jbHVkZUZpbGVzOiB0cnVlLFxuICAgICAgICBpbmNsdWRlRGlyczogZmFsc2UsXG4gICAgICAgIGZvbGxvd1N5bWxpbmtzOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgICAgZm9yIGF3YWl0IChjb25zdCBlbnRyeSBvZiBlbnRpcmVzKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsVXJsID0gdG9GaWxlVXJsKGVudHJ5LnBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoID0gbG9jYWxVcmwuaHJlZi5zdWJzdHJpbmcoc3RhdGljRm9sZGVyLmhyZWYubGVuZ3RoKTtcbiAgICAgICAgY29uc3Qgc3RhdCA9IGF3YWl0IERlbm8uc3RhdChsb2NhbFVybCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gbWVkaWFUeXBlTG9va3VwKGV4dG5hbWUocGF0aCkpID8/XG4gICAgICAgICAgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjtcbiAgICAgICAgY29uc3QgZXRhZyA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KFxuICAgICAgICAgIFwiU0hBLTFcIixcbiAgICAgICAgICBlbmNvZGVyLmVuY29kZShCVUlMRF9JRCArIHBhdGgpLFxuICAgICAgICApLnRoZW4oKGhhc2gpID0+XG4gICAgICAgICAgQXJyYXkuZnJvbShuZXcgVWludDhBcnJheShoYXNoKSlcbiAgICAgICAgICAgIC5tYXAoKGJ5dGUpID0+IGJ5dGUudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKSlcbiAgICAgICAgICAgIC5qb2luKFwiXCIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ZpbGU6IFN0YXRpY0ZpbGUgPSB7XG4gICAgICAgICAgbG9jYWxVcmwsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBzaXplOiBzdGF0LnNpemUsXG4gICAgICAgICAgY29udGVudFR5cGUsXG4gICAgICAgICAgZXRhZyxcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGljRmlsZXMucHVzaChzdGF0aWNGaWxlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBEZW5vLmVycm9ycy5Ob3RGb3VuZCkge1xuICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgU2VydmVyQ29udGV4dChcbiAgICAgIHJvdXRlcyxcbiAgICAgIGlzbGFuZHMsXG4gICAgICBzdGF0aWNGaWxlcyxcbiAgICAgIG9wdHMucmVuZGVyID8/IERFRkFVTFRfUkVOREVSX0ZOLFxuICAgICAgbWlkZGxld2FyZXMsXG4gICAgICBhcHAsXG4gICAgICBub3RGb3VuZCxcbiAgICAgIGVycm9yLFxuICAgICAgaW1wb3J0TWFwVVJMLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbnMgcmV0dXJucyBhIHJlcXVlc3QgaGFuZGxlciB0aGF0IGhhbmRsZXMgYWxsIHJvdXRlcyByZXF1aXJlZFxuICAgKiBieSBmcmVzaCwgaW5jbHVkaW5nIHN0YXRpYyBmaWxlcy5cbiAgICovXG4gIGhhbmRsZXIoKTogUmVxdWVzdEhhbmRsZXIge1xuICAgIGNvbnN0IGlubmVyID0gcm91dGVyLnJvdXRlcjxSb3V0ZXJTdGF0ZT4oLi4udGhpcy4jaGFuZGxlcnMoKSk7XG4gICAgY29uc3Qgd2l0aE1pZGRsZXdhcmVzID0gdGhpcy4jY29tcG9zZU1pZGRsZXdhcmVzKHRoaXMuI21pZGRsZXdhcmVzKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihyZXE6IFJlcXVlc3QsIGNvbm5JbmZvOiBDb25uSW5mbykge1xuICAgICAgLy8gUmVkaXJlY3QgcmVxdWVzdHMgdGhhdCBlbmQgd2l0aCBhIHRyYWlsaW5nIHNsYXNoXG4gICAgICAvLyB0byB0aGVpciBub24tdHJhaWxpbmcgc2xhc2ggY291bnRlcnBhcnQuXG4gICAgICAvLyBFeDogL2Fib3V0LyAtPiAvYWJvdXRcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XG4gICAgICBpZiAodXJsLnBhdGhuYW1lLmxlbmd0aCA+IDEgJiYgdXJsLnBhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKSkge1xuICAgICAgICB1cmwucGF0aG5hbWUgPSB1cmwucGF0aG5hbWUuc2xpY2UoMCwgLTEpO1xuICAgICAgICByZXR1cm4gUmVzcG9uc2UucmVkaXJlY3QodXJsLmhyZWYsIDMwNyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gd2l0aE1pZGRsZXdhcmVzKHJlcSwgY29ubkluZm8sIGlubmVyKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIElkZW50aWZ5IHdoaWNoIG1pZGRsZXdhcmVzIHNob3VsZCBiZSBhcHBsaWVkIGZvciBhIHJlcXVlc3QsXG4gICAqIGNoYWluIHRoZW0gYW5kIHJldHVybiBhIGhhbmRsZXIgcmVzcG9uc2VcbiAgICovXG4gICNjb21wb3NlTWlkZGxld2FyZXMobWlkZGxld2FyZXM6IE1pZGRsZXdhcmVSb3V0ZVtdKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHJlcTogUmVxdWVzdCxcbiAgICAgIGNvbm5JbmZvOiBDb25uSW5mbyxcbiAgICAgIGlubmVyOiByb3V0ZXIuSGFuZGxlcjxSb3V0ZXJTdGF0ZT4sXG4gICAgKSA9PiB7XG4gICAgICAvLyBpZGVudGlmeSBtaWRkbGV3YXJlcyB0byBhcHBseSwgaWYgYW55LlxuICAgICAgLy8gbWlkZGxld2FyZXMgc2hvdWxkIGJlIGFscmVhZHkgc29ydGVkIGZyb20gZGVlcGVzdCB0byBzaGFsbG93IGxheWVyXG4gICAgICBjb25zdCBtd3MgPSBzZWxlY3RNaWRkbGV3YXJlcyhyZXEudXJsLCBtaWRkbGV3YXJlcyk7XG5cbiAgICAgIGNvbnN0IGhhbmRsZXJzOiAoKCkgPT4gUmVzcG9uc2UgfCBQcm9taXNlPFJlc3BvbnNlPilbXSA9IFtdO1xuXG4gICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJzLnNoaWZ0KCkhO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaGFuZGxlcigpKTtcbiAgICAgICAgfSxcbiAgICAgICAgLi4uY29ubkluZm8sXG4gICAgICAgIHN0YXRlOiB7fSxcbiAgICAgIH07XG5cbiAgICAgIGZvciAoY29uc3QgbXcgb2YgbXdzKSB7XG4gICAgICAgIGhhbmRsZXJzLnB1c2goKCkgPT4gbXcuaGFuZGxlcihyZXEsIGN0eCkpO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVycy5wdXNoKCgpID0+IGlubmVyKHJlcSwgY3R4KSk7XG5cbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBoYW5kbGVycy5zaGlmdCgpITtcbiAgICAgIHJldHVybiBoYW5kbGVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYWxsIHJvdXRlcyByZXF1aXJlZCBieSBmcmVzaCBhcyBhbiBleHRlbmRlZFxuICAgKiBwYXRoLXRvLXJlZ2V4LCB0byBoYW5kbGVyIG1hcHBpbmcuXG4gICAqL1xuICAjaGFuZGxlcnMoKTogW1xuICAgIHJvdXRlci5Sb3V0ZXM8Um91dGVyU3RhdGU+LFxuICAgIHJvdXRlci5IYW5kbGVyPFJvdXRlclN0YXRlPixcbiAgICByb3V0ZXIuRXJyb3JIYW5kbGVyPFJvdXRlclN0YXRlPixcbiAgXSB7XG4gICAgY29uc3Qgcm91dGVzOiByb3V0ZXIuUm91dGVzPFJvdXRlclN0YXRlPiA9IHt9O1xuXG4gICAgcm91dGVzW2Ake0lOVEVSTkFMX1BSRUZJWH0ke0pTX1BSRUZJWH0vJHtCVUlMRF9JRH0vOnBhdGgqYF0gPSB0aGlzXG4gICAgICAuI2J1bmRsZUFzc2V0Um91dGUoKTtcblxuICAgIGlmICh0aGlzLiNkZXYpIHtcbiAgICAgIHJvdXRlc1tSRUZSRVNIX0pTX1VSTF0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGpzID1cbiAgICAgICAgICBgbGV0IHJlbG9hZGluZyA9IGZhbHNlOyBjb25zdCBidWlsZElkID0gXCIke0JVSUxEX0lEfVwiOyBuZXcgRXZlbnRTb3VyY2UoXCIke0FMSVZFX1VSTH1cIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHsgaWYgKGUuZGF0YSAhPT0gYnVpbGRJZCAmJiAhcmVsb2FkaW5nKSB7IHJlbG9hZGluZyA9IHRydWU7IGxvY2F0aW9uLnJlbG9hZCgpOyB9IH0pO2A7XG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGpzKSwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vamF2YXNjcmlwdDsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJvdXRlc1tBTElWRV9VUkxdID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGltZXJJZDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBib2R5ID0gbmV3IFJlYWRhYmxlU3RyZWFtKHtcbiAgICAgICAgICBzdGFydChjb250cm9sbGVyKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoYGRhdGE6ICR7QlVJTERfSUR9XFxucmV0cnk6IDEwMFxcblxcbmApO1xuICAgICAgICAgICAgdGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKGBkYXRhOiAke0JVSUxEX0lEfVxcblxcbmApO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYW5jZWwoKSB7XG4gICAgICAgICAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoYm9keS5waXBlVGhyb3VnaChuZXcgVGV4dEVuY29kZXJTdHJlYW0oKSksIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcInRleHQvZXZlbnQtc3RyZWFtXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgc3RhdGljIGZpbGUgcm91dGVzLlxuICAgIC8vIGVhY2ggZmlsZXMgaGFzIDIgc3RhdGljIHJvdXRlczpcbiAgICAvLyAtIG9uZSBzZXJ2aW5nIHRoZSBmaWxlIGF0IGl0cyBsb2NhdGlvbiB3aXRob3V0IGEgXCJjYWNoZSBidXJzdGluZ1wiIG1lY2hhbmlzbVxuICAgIC8vIC0gb25lIGNvbnRhaW5pbmcgdGhlIEJVSUxEX0lEIGluIHRoZSBwYXRoIHRoYXQgY2FuIGJlIGNhY2hlZFxuICAgIGZvciAoXG4gICAgICBjb25zdCB7IGxvY2FsVXJsLCBwYXRoLCBzaXplLCBjb250ZW50VHlwZSwgZXRhZyB9IG9mIHRoaXMuI3N0YXRpY0ZpbGVzXG4gICAgKSB7XG4gICAgICBjb25zdCByb3V0ZSA9IHNhbml0aXplUGF0aFRvUmVnZXgocGF0aCk7XG4gICAgICByb3V0ZXNbYEdFVEAke3JvdXRlfWBdID0gdGhpcy4jc3RhdGljRmlsZUhhbmRsZXIoXG4gICAgICAgIGxvY2FsVXJsLFxuICAgICAgICBzaXplLFxuICAgICAgICBjb250ZW50VHlwZSxcbiAgICAgICAgZXRhZyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuUmVuZGVyID0gPERhdGEgPSB1bmRlZmluZWQ+KFxuICAgICAgcm91dGU6IFJvdXRlPERhdGE+IHwgVW5rbm93blBhZ2UgfCBFcnJvclBhZ2UsXG4gICAgICBzdGF0dXM6IG51bWJlcixcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IGltcG9ydHM6IHN0cmluZ1tdID0gW107XG4gICAgICBpZiAodGhpcy4jZGV2KSB7XG4gICAgICAgIGltcG9ydHMucHVzaChSRUZSRVNIX0pTX1VSTCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICByZXE6IFJlcXVlc3QsXG4gICAgICAgIHBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICAgICAgZXJyb3I/OiB1bmtub3duLFxuICAgICAgKSA9PiB7XG4gICAgICAgIHJldHVybiBhc3luYyAoZGF0YT86IERhdGEpID0+IHtcbiAgICAgICAgICBpZiAocm91dGUuY29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgcGFnZSBkb2VzIG5vdCBoYXZlIGEgY29tcG9uZW50IHRvIHJlbmRlci5cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHByZWxvYWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBpbnRlcm5hbFJlbmRlcih7XG4gICAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICAgIGlzbGFuZHM6IHRoaXMuI2lzbGFuZHMsXG4gICAgICAgICAgICBhcHA6IHRoaXMuI2FwcCxcbiAgICAgICAgICAgIGltcG9ydHMsXG4gICAgICAgICAgICBwcmVsb2FkcyxcbiAgICAgICAgICAgIHJlbmRlckZuOiB0aGlzLiNyZW5kZXJGbixcbiAgICAgICAgICAgIHVybDogbmV3IFVSTChyZXEudXJsKSxcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBbYm9keSwgY3NwXSA9IHJlc3A7XG4gICAgICAgICAgaWYgKGNzcCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuI2Rldikge1xuICAgICAgICAgICAgICBjc3AuZGlyZWN0aXZlcy5jb25uZWN0U3JjID0gW1xuICAgICAgICAgICAgICAgIC4uLihjc3AuZGlyZWN0aXZlcy5jb25uZWN0U3JjID8/IFtdKSxcbiAgICAgICAgICAgICAgICBTRUxGLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gc2VyaWFsaXplQ1NQRGlyZWN0aXZlcyhjc3AuZGlyZWN0aXZlcyk7XG4gICAgICAgICAgICBpZiAoY3NwLnJlcG9ydE9ubHkpIHtcbiAgICAgICAgICAgICAgaGVhZGVyc1tcImNvbnRlbnQtc2VjdXJpdHktcG9saWN5LXJlcG9ydC1vbmx5XCJdID0gZGlyZWN0aXZlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGVhZGVyc1tcImNvbnRlbnQtc2VjdXJpdHktcG9saWN5XCJdID0gZGlyZWN0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIHsgc3RhdHVzLCBoZWFkZXJzIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCByb3V0ZSBvZiB0aGlzLiNyb3V0ZXMpIHtcbiAgICAgIGNvbnN0IGNyZWF0ZVJlbmRlciA9IGdlblJlbmRlcihyb3V0ZSwgMjAwKTtcbiAgICAgIGlmICh0eXBlb2Ygcm91dGUuaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJvdXRlc1tyb3V0ZS5wYXR0ZXJuXSA9IChyZXEsIGN0eCwgcGFyYW1zKSA9PlxuICAgICAgICAgIChyb3V0ZS5oYW5kbGVyIGFzIEhhbmRsZXIpKHJlcSwge1xuICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgcmVuZGVyOiBjcmVhdGVSZW5kZXIocmVxLCBwYXJhbXMpLFxuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBbbWV0aG9kLCBoYW5kbGVyXSBvZiBPYmplY3QuZW50cmllcyhyb3V0ZS5oYW5kbGVyKSkge1xuICAgICAgICAgIHJvdXRlc1tgJHttZXRob2R9QCR7cm91dGUucGF0dGVybn1gXSA9IChyZXEsIGN0eCwgcGFyYW1zKSA9PlxuICAgICAgICAgICAgaGFuZGxlcihyZXEsIHtcbiAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgIHJlbmRlcjogY3JlYXRlUmVuZGVyKHJlcSwgcGFyYW1zKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdW5rbm93bkhhbmRsZXJSZW5kZXIgPSBnZW5SZW5kZXIodGhpcy4jbm90Rm91bmQsIDQwNCk7XG4gICAgY29uc3QgdW5rbm93bkhhbmRsZXI6IHJvdXRlci5IYW5kbGVyPFJvdXRlclN0YXRlPiA9IChcbiAgICAgIHJlcSxcbiAgICAgIGN0eCxcbiAgICApID0+XG4gICAgICB0aGlzLiNub3RGb3VuZC5oYW5kbGVyKFxuICAgICAgICByZXEsXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgcmVuZGVyOiB1bmtub3duSGFuZGxlclJlbmRlcihyZXEsIHt9KSxcbiAgICAgICAgfSxcbiAgICAgICk7XG5cbiAgICBjb25zdCBlcnJvckhhbmRsZXJSZW5kZXIgPSBnZW5SZW5kZXIodGhpcy4jZXJyb3IsIDUwMCk7XG4gICAgY29uc3QgZXJyb3JIYW5kbGVyOiByb3V0ZXIuRXJyb3JIYW5kbGVyPFJvdXRlclN0YXRlPiA9IChcbiAgICAgIHJlcSxcbiAgICAgIGN0eCxcbiAgICAgIGVycm9yLFxuICAgICkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgXCIlY0FuIGVycm9yIG9jY3VyZWQgZHVyaW5nIHJvdXRlIGhhbmRsaW5nIG9yIHBhZ2UgcmVuZGVyaW5nLlwiLFxuICAgICAgICBcImNvbG9yOnJlZFwiLFxuICAgICAgICBlcnJvcixcbiAgICAgICk7XG4gICAgICByZXR1cm4gdGhpcy4jZXJyb3IuaGFuZGxlcihcbiAgICAgICAgcmVxLFxuICAgICAgICB7XG4gICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIHJlbmRlcjogZXJyb3JIYW5kbGVyUmVuZGVyKHJlcSwge30sIGVycm9yKSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBbcm91dGVzLCB1bmtub3duSGFuZGxlciwgZXJyb3JIYW5kbGVyXTtcbiAgfVxuXG4gICNzdGF0aWNGaWxlSGFuZGxlcihcbiAgICBsb2NhbFVybDogVVJMLFxuICAgIHNpemU6IG51bWJlcixcbiAgICBjb250ZW50VHlwZTogc3RyaW5nLFxuICAgIGV0YWc6IHN0cmluZyxcbiAgKTogcm91dGVyLk1hdGNoSGFuZGxlciB7XG4gICAgcmV0dXJuIGFzeW5jIChyZXE6IFJlcXVlc3QpID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XG4gICAgICBjb25zdCBrZXkgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChBU1NFVF9DQUNIRV9CVVNUX0tFWSk7XG4gICAgICBpZiAoa2V5ICE9PSBudWxsICYmIEJVSUxEX0lEICE9PSBrZXkpIHtcbiAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoQVNTRVRfQ0FDSEVfQlVTVF9LRVkpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2g7XG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJcIiwge1xuICAgICAgICAgIHN0YXR1czogMzA3LFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwidGV4dC9wbGFpblwiLFxuICAgICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBjb250ZW50VHlwZSxcbiAgICAgICAgZXRhZyxcbiAgICAgICAgdmFyeTogXCJJZi1Ob25lLU1hdGNoXCIsXG4gICAgICB9KTtcbiAgICAgIGlmIChrZXkgIT09IG51bGwpIHtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJDYWNoZS1Db250cm9sXCIsIFwicHVibGljLCBtYXgtYWdlPTMxNTM2MDAwLCBpbW11dGFibGVcIik7XG4gICAgICB9XG4gICAgICBjb25zdCBpZk5vbmVNYXRjaCA9IHJlcS5oZWFkZXJzLmdldChcImlmLW5vbmUtbWF0Y2hcIik7XG4gICAgICBpZiAoaWZOb25lTWF0Y2ggPT09IGV0YWcgfHwgaWZOb25lTWF0Y2ggPT09IFwiVy9cIiArIGV0YWcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7IHN0YXR1czogMzA0LCBoZWFkZXJzIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IERlbm8ub3Blbihsb2NhbFVybCk7XG4gICAgICAgIGhlYWRlcnMuc2V0KFwiY29udGVudC1sZW5ndGhcIiwgU3RyaW5nKHNpemUpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShmaWxlLnJlYWRhYmxlLCB7IGhlYWRlcnMgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcm91dGVyIHRoYXQgY29udGFpbnMgYWxsIGZyZXNoIHJvdXRlcy4gU2hvdWxkIGJlIG1vdW50ZWQgYXRcbiAgICogY29uc3RhbnRzLklOVEVSTkFMX1BSRUZJWFxuICAgKi9cbiAgI2J1bmRsZUFzc2V0Um91dGUgPSAoKTogcm91dGVyLk1hdGNoSGFuZGxlciA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChfcmVxLCBfY3R4LCBwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IHBhdGggPSBgLyR7cGFyYW1zLnBhdGh9YDtcbiAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLiNidW5kbGVyLmdldChwYXRoKTtcbiAgICAgIGxldCByZXM7XG4gICAgICBpZiAoZmlsZSkge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgIFwiQ2FjaGUtQ29udHJvbFwiOiBcInB1YmxpYywgbWF4LWFnZT02MDQ4MDAsIGltbXV0YWJsZVwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IG1lZGlhVHlwZUxvb2t1cChwYXRoKTtcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XG4gICAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgY29udGVudFR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzID0gbmV3IFJlc3BvbnNlKGZpbGUsIHtcbiAgICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcyA/PyBuZXcgUmVzcG9uc2UobnVsbCwge1xuICAgICAgICBzdGF0dXM6IDQwNCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmNvbnN0IERFRkFVTFRfUkVOREVSX0ZOOiBSZW5kZXJGdW5jdGlvbiA9IChfY3R4LCByZW5kZXIpID0+IHtcbiAgcmVuZGVyKCk7XG59O1xuXG5jb25zdCBERUZBVUxUX0FQUDogQXBwTW9kdWxlID0ge1xuICBkZWZhdWx0OiAoeyBDb21wb25lbnQgfSkgPT4gaChDb21wb25lbnQsIHt9KSxcbn07XG5cbmNvbnN0IERFRkFVTFRfTk9UX0ZPVU5EOiBVbmtub3duUGFnZSA9IHtcbiAgcGF0dGVybjogXCJcIixcbiAgdXJsOiBcIlwiLFxuICBuYW1lOiBcIl80MDRcIixcbiAgaGFuZGxlcjogKHJlcSkgPT4gcm91dGVyLmRlZmF1bHRPdGhlckhhbmRsZXIocmVxKSxcbiAgY3NwOiBmYWxzZSxcbn07XG5cbmNvbnN0IERFRkFVTFRfRVJST1I6IEVycm9yUGFnZSA9IHtcbiAgcGF0dGVybjogXCJcIixcbiAgdXJsOiBcIlwiLFxuICBuYW1lOiBcIl81MDBcIixcbiAgY29tcG9uZW50OiBEZWZhdWx0RXJyb3JIYW5kbGVyLFxuICBoYW5kbGVyOiAoX3JlcSwgY3R4KSA9PiBjdHgucmVuZGVyKCksXG4gIGNzcDogZmFsc2UsXG59O1xuXG4vKipcbiAqIFJldHVybiBhIGxpc3Qgb2YgbWlkZGxld2FyZXMgdGhhdCBuZWVkcyB0byBiZSBhcHBsaWVkIGZvciByZXF1ZXN0IHVybFxuICogQHBhcmFtIHVybCB0aGUgcmVxdWVzdCB1cmxcbiAqIEBwYXJhbSBtaWRkbGV3YXJlcyBBcnJheSBvZiBtaWRkbGV3YXJlcyBoYW5kbGVycyBhbmQgdGhlaXIgcm91dGVzIGFzIHBhdGgtdG8tcmVnZXhwIHN0eWxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RNaWRkbGV3YXJlcyh1cmw6IHN0cmluZywgbWlkZGxld2FyZXM6IE1pZGRsZXdhcmVSb3V0ZVtdKSB7XG4gIGNvbnN0IHNlbGVjdGVkTXdzOiBNaWRkbGV3YXJlW10gPSBbXTtcbiAgY29uc3QgcmVxVVJMID0gbmV3IFVSTCh1cmwpO1xuXG4gIGZvciAoY29uc3QgeyBjb21waWxlZFBhdHRlcm4sIGhhbmRsZXIgfSBvZiBtaWRkbGV3YXJlcykge1xuICAgIGNvbnN0IHJlcyA9IGNvbXBpbGVkUGF0dGVybi5leGVjKHJlcVVSTCk7XG4gICAgaWYgKHJlcykge1xuICAgICAgc2VsZWN0ZWRNd3MucHVzaCh7IGhhbmRsZXIgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGVkTXdzO1xufVxuXG4vKipcbiAqIFNvcnQgcGFnZXMgYnkgdGhlaXIgcmVsYXRpdmUgcm91dGluZyBwcmlvcml0eSwgYmFzZWQgb24gdGhlIHBhcnRzIGluIHRoZVxuICogcm91dGUgbWF0Y2hlclxuICovXG5mdW5jdGlvbiBzb3J0Um91dGVzPFQgZXh0ZW5kcyB7IHBhdHRlcm46IHN0cmluZyB9Pihyb3V0ZXM6IFRbXSkge1xuICByb3V0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IHBhcnRzQSA9IGEucGF0dGVybi5zcGxpdChcIi9cIik7XG4gICAgY29uc3QgcGFydHNCID0gYi5wYXR0ZXJuLnNwbGl0KFwiL1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWF4KHBhcnRzQS5sZW5ndGgsIHBhcnRzQi5sZW5ndGgpOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnRBID0gcGFydHNBW2ldO1xuICAgICAgY29uc3QgcGFydEIgPSBwYXJ0c0JbaV07XG4gICAgICBpZiAocGFydEEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIC0xO1xuICAgICAgaWYgKHBhcnRCID09PSB1bmRlZmluZWQpIHJldHVybiAxO1xuICAgICAgaWYgKHBhcnRBID09PSBwYXJ0QikgY29udGludWU7XG4gICAgICBjb25zdCBwcmlvcml0eUEgPSBwYXJ0QS5zdGFydHNXaXRoKFwiOlwiKSA/IHBhcnRBLmVuZHNXaXRoKFwiKlwiKSA/IDAgOiAxIDogMjtcbiAgICAgIGNvbnN0IHByaW9yaXR5QiA9IHBhcnRCLnN0YXJ0c1dpdGgoXCI6XCIpID8gcGFydEIuZW5kc1dpdGgoXCIqXCIpID8gMCA6IDEgOiAyO1xuICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHByaW9yaXR5QiAtIHByaW9yaXR5QSwgMSksIC0xKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pO1xufVxuXG4vKiogVHJhbnNmb3JtIGEgZmlsZXN5c3RlbSBVUkwgcGF0aCB0byBhIGBwYXRoLXRvLXJlZ2V4YCBzdHlsZSBtYXRjaGVyLiAqL1xuZnVuY3Rpb24gcGF0aFRvUGF0dGVybihwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xuICBpZiAocGFydHNbcGFydHMubGVuZ3RoIC0gMV0gPT09IFwiaW5kZXhcIikge1xuICAgIHBhcnRzLnBvcCgpO1xuICB9XG4gIGNvbnN0IHJvdXRlID0gXCIvXCIgKyBwYXJ0c1xuICAgIC5tYXAoKHBhcnQpID0+IHtcbiAgICAgIGlmIChwYXJ0LnN0YXJ0c1dpdGgoXCJbLi4uXCIpICYmIHBhcnQuZW5kc1dpdGgoXCJdXCIpKSB7XG4gICAgICAgIHJldHVybiBgOiR7cGFydC5zbGljZSg0LCBwYXJ0Lmxlbmd0aCAtIDEpfSpgO1xuICAgICAgfVxuICAgICAgaWYgKHBhcnQuc3RhcnRzV2l0aChcIltcIikgJiYgcGFydC5lbmRzV2l0aChcIl1cIikpIHtcbiAgICAgICAgcmV0dXJuIGA6JHtwYXJ0LnNsaWNlKDEsIHBhcnQubGVuZ3RoIC0gMSl9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJ0O1xuICAgIH0pXG4gICAgLmpvaW4oXCIvXCIpO1xuICByZXR1cm4gcm91dGU7XG59XG5cbi8vIE5vcm1hbGl6ZSBhIHBhdGggZm9yIHVzZSBpbiBhIFVSTC4gUmV0dXJucyBudWxsIGlmIHRoZSBwYXRoIGlzIHVucGFyc2FibGUuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVVJMUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXRoVXJsID0gbmV3IFVSTChcImZpbGU6Ly8vXCIpO1xuICAgIHBhdGhVcmwucGF0aG5hbWUgPSBwYXRoO1xuICAgIHJldHVybiBwYXRoVXJsLnBhdGhuYW1lO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYW5pdGl6ZVBhdGhUb1JlZ2V4KHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoXG4gICAgLnJlcGxhY2VBbGwoXCJcXCpcIiwgXCJcXFxcKlwiKVxuICAgIC5yZXBsYWNlQWxsKFwiXFwrXCIsIFwiXFxcXCtcIilcbiAgICAucmVwbGFjZUFsbChcIlxcP1wiLCBcIlxcXFw/XCIpXG4gICAgLnJlcGxhY2VBbGwoXCJcXHtcIiwgXCJcXFxce1wiKVxuICAgIC5yZXBsYWNlQWxsKFwiXFx9XCIsIFwiXFxcXH1cIilcbiAgICAucmVwbGFjZUFsbChcIlxcKFwiLCBcIlxcXFwoXCIpXG4gICAgLnJlcGxhY2VBbGwoXCJcXClcIiwgXCJcXFxcKVwiKVxuICAgIC5yZXBsYWNlQWxsKFwiXFw6XCIsIFwiXFxcXDpcIik7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUNTUERpcmVjdGl2ZXMoY3NwOiBDb250ZW50U2VjdXJpdHlQb2xpY3lEaXJlY3RpdmVzKTogc3RyaW5nIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNzcClcbiAgICAuZmlsdGVyKChbX2tleSwgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgIC5tYXAoKFtrLCB2XTogW3N0cmluZywgc3RyaW5nIHwgc3RyaW5nW11dKSA9PiB7XG4gICAgICAvLyBUdXJuIGNhbWVsIGNhc2UgaW50byBzbmFrZSBjYXNlLlxuICAgICAgY29uc3Qga2V5ID0gay5yZXBsYWNlKC9bQS1aXS9nLCAobSkgPT4gYC0ke20udG9Mb3dlckNhc2UoKX1gKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gQXJyYXkuaXNBcnJheSh2KSA/IHYuam9pbihcIiBcIikgOiB2O1xuICAgICAgcmV0dXJuIGAke2tleX0gJHt2YWx1ZX1gO1xuICAgIH0pXG4gICAgLmpvaW4oXCI7IFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmVQYXRoVG9QYXR0ZXJuKGJhc2VSb3V0ZTogc3RyaW5nKSB7XG4gIGJhc2VSb3V0ZSA9IGJhc2VSb3V0ZS5zbGljZSgwLCAtXCJfbWlkZGxld2FyZVwiLmxlbmd0aCk7XG4gIGxldCBwYXR0ZXJuID0gcGF0aFRvUGF0dGVybihiYXNlUm91dGUpO1xuICBpZiAocGF0dGVybi5lbmRzV2l0aChcIi9cIikpIHtcbiAgICBwYXR0ZXJuID0gcGF0dGVybi5zbGljZSgwLCAtMSkgKyBcInsvKn0/XCI7XG4gIH1cbiAgY29uc3QgY29tcGlsZWRQYXR0ZXJuID0gbmV3IFVSTFBhdHRlcm4oeyBwYXRobmFtZTogcGF0dGVybiB9KTtcbiAgcmV0dXJuIHsgcGF0dGVybiwgY29tcGlsZWRQYXR0ZXJuIH07XG59XG4iXX0=