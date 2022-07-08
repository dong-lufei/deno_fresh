import { extname, fromFileUrl } from "../deps.ts";
export async function load(url, _options) {
    switch (url.protocol) {
        case "http:":
        case "https:":
        case "data:":
            return await loadWithFetch(url);
        case "file:": {
            const res = await loadWithReadFile(url);
            res.watchFiles = [fromFileUrl(url.href)];
            return res;
        }
    }
    return null;
}
async function loadWithFetch(specifier) {
    const specifierRaw = specifier.href;
    const resp = await fetch(specifierRaw);
    if (!resp.ok) {
        throw new Error(`Encountered status code ${resp.status} while fetching ${specifierRaw}.`);
    }
    const contentType = resp.headers.get("content-type");
    const loader = mapContentTypeToLoader(new URL(resp.url || specifierRaw), contentType);
    const contents = new Uint8Array(await resp.arrayBuffer());
    return { contents, loader };
}
async function loadWithReadFile(specifier) {
    const path = fromFileUrl(specifier);
    const loader = mapContentTypeToLoader(specifier, null);
    const contents = await Deno.readFile(path);
    return { contents, loader };
}
function mapContentTypeToLoader(specifier, contentType) {
    const mediaType = mapContentType(specifier, contentType);
    switch (mediaType) {
        case "JavaScript":
        case "Mjs":
            return "js";
        case "JSX":
            return "jsx";
        case "TypeScript":
        case "Mts":
            return "ts";
        case "TSX":
            return "tsx";
        default:
            throw new Error(`Unhandled media type ${mediaType}. Content type is ${contentType}.`);
    }
}
function mapContentType(specifier, contentType) {
    if (contentType !== null) {
        const contentTypes = contentType.split(";");
        const mediaType = contentTypes[0].toLowerCase();
        switch (mediaType) {
            case "application/typescript":
            case "text/typescript":
            case "video/vnd.dlna.mpeg-tts":
            case "video/mp2t":
            case "application/x-typescript":
                return mapJsLikeExtension(specifier, "TypeScript");
            case "application/javascript":
            case "text/javascript":
            case "application/ecmascript":
            case "text/ecmascript":
            case "application/x-javascript":
            case "application/node":
                return mapJsLikeExtension(specifier, "JavaScript");
            case "text/jsx":
                return "JSX";
            case "text/tsx":
                return "TSX";
            case "application/json":
            case "text/json":
                return "Json";
            case "application/wasm":
                return "Wasm";
            case "text/plain":
            case "application/octet-stream":
                return mediaTypeFromSpecifier(specifier);
            default:
                return "Unknown";
        }
    }
    else {
        return mediaTypeFromSpecifier(specifier);
    }
}
function mapJsLikeExtension(specifier, defaultType) {
    const path = specifier.pathname;
    switch (extname(path)) {
        case ".jsx":
            return "JSX";
        case ".mjs":
            return "Mjs";
        case ".cjs":
            return "Cjs";
        case ".tsx":
            return "TSX";
        case ".ts":
            if (path.endsWith(".d.ts")) {
                return "Dts";
            }
            else {
                return defaultType;
            }
        case ".mts": {
            if (path.endsWith(".d.mts")) {
                return "Dmts";
            }
            else {
                return defaultType == "JavaScript" ? "Mjs" : "Mts";
            }
        }
        case ".cts": {
            if (path.endsWith(".d.cts")) {
                return "Dcts";
            }
            else {
                return defaultType == "JavaScript" ? "Cjs" : "Cts";
            }
        }
        default:
            return defaultType;
    }
}
function mediaTypeFromSpecifier(specifier) {
    const path = specifier.pathname;
    switch (extname(path)) {
        case "":
            if (path.endsWith("/.tsbuildinfo")) {
                return "TsBuildInfo";
            }
            else {
                return "Unknown";
            }
        case ".ts":
            if (path.endsWith(".d.ts")) {
                return "Dts";
            }
            else {
                return "TypeScript";
            }
        case ".mts":
            if (path.endsWith(".d.mts")) {
                return "Dmts";
            }
            else {
                return "Mts";
            }
        case ".cts":
            if (path.endsWith(".d.cts")) {
                return "Dcts";
            }
            else {
                return "Cts";
            }
        case ".tsx":
            return "TSX";
        case ".js":
            return "JavaScript";
        case ".jsx":
            return "JSX";
        case ".mjs":
            return "Mjs";
        case ".cjs":
            return "Cjs";
        case ".json":
            return "Json";
        case ".wasm":
            return "Wasm";
        case ".tsbuildinfo":
            return "TsBuildInfo";
        case ".map":
            return "SourceMap";
        default:
            return "Unknown";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFibGVfbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9ydGFibGVfbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBVyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBTzNELE1BQU0sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUFRLEVBQ1IsUUFBcUI7SUFFckIsUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFO1FBQ3BCLEtBQUssT0FBTyxDQUFDO1FBQ2IsS0FBSyxRQUFRLENBQUM7UUFDZCxLQUFLLE9BQU87WUFDVixPQUFPLE1BQU0sYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssT0FBTyxDQUFDLENBQUM7WUFDWixNQUFNLEdBQUcsR0FBRyxNQUFNLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekMsT0FBTyxHQUFHLENBQUM7U0FDWjtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsS0FBSyxVQUFVLGFBQWEsQ0FDMUIsU0FBYztJQUVkLE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFHcEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDWixNQUFNLElBQUksS0FBSyxDQUNiLDJCQUEyQixJQUFJLENBQUMsTUFBTSxtQkFBbUIsWUFBWSxHQUFHLENBQ3pFLENBQUM7S0FDSDtJQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sTUFBTSxHQUFHLHNCQUFzQixDQUNuQyxJQUFJLEdBQUcs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U0FBUyxDQUFDO2FBQ2xCO1FBQ0gsS0FBSyxLQUFLO1lBQ1IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMxQixPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE9BQU8sWUFBWSxDQUFDO2FBQ3JCO1FBQ0gsS0FBSyxNQUFNO1lBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMzQixPQUFPLE1BQU0sQ0FBQzthQUNmO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxLQUFLLE1BQU07WUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNCLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILEtBQUssTUFBTTtZQUNULE9BQU8sS0FBSyxDQUFDO1FBQ2YsS0FBSyxLQUFLO1lBQ1IsT0FBTyxZQUFZLENBQUM7UUFDdEIsS0FBSyxNQUFNO1lBQ1QsT0FBTyxLQUFLLENBQUM7UUFDZixLQUFLLE1BQU07WUFDVCxPQUFPLEtBQUssQ0FBQztRQUNmLEtBQUssTUFBTTtZQUNULE9BQU8sS0FBSyxDQUFDO1FBQ2YsS0FBSyxPQUFPO1lBQ1YsT0FBTyxNQUFNLENBQUM7UUFDaEIsS0FBSyxPQUFPO1lBQ1YsT0FBTyxNQUFNLENBQUM7UUFDaEIsS0FBSyxjQUFjO1lBQ2pCLE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLEtBQUssTUFBTTtZQUNULE9BQU8sV0FBVyxDQUFDO1FBQ3JCO1lBQ0UsT0FBTyxTQUFTLENBQUM7S0FDcEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXNidWlsZCwgZXh0bmFtZSwgZnJvbUZpbGVVcmwgfSBmcm9tIFwiLi4vZGVwcy50c1wiO1xuaW1wb3J0ICogYXMgZGVubyBmcm9tIFwiLi9kZW5vLnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZE9wdGlvbnMge1xuICBpbXBvcnRNYXBVUkw/OiBVUkw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkKFxuICB1cmw6IFVSTCxcbiAgX29wdGlvbnM6IExvYWRPcHRpb25zLFxuKTogUHJvbWlzZTxlc2J1aWxkLk9uTG9hZFJlc3VsdCB8IG51bGw+IHtcbiAgc3dpdGNoICh1cmwucHJvdG9jb2wpIHtcbiAgICBjYXNlIFwiaHR0cDpcIjpcbiAgICBjYXNlIFwiaHR0cHM6XCI6XG4gICAgY2FzZSBcImRhdGE6XCI6XG4gICAgICByZXR1cm4gYXdhaXQgbG9hZFdpdGhGZXRjaCh1cmwpO1xuICAgIGNhc2UgXCJmaWxlOlwiOiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBsb2FkV2l0aFJlYWRGaWxlKHVybCk7XG4gICAgICByZXMud2F0Y2hGaWxlcyA9IFtmcm9tRmlsZVVybCh1cmwuaHJlZildO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRXaXRoRmV0Y2goXG4gIHNwZWNpZmllcjogVVJMLFxuKTogUHJvbWlzZTxlc2J1aWxkLk9uTG9hZFJlc3VsdD4ge1xuICBjb25zdCBzcGVjaWZpZXJSYXcgPSBzcGVjaWZpZXIuaHJlZjtcblxuICAvLyBUT0RPKGx1Y2FjYXNvbmF0byk6IHJlZGlyZWN0cyFcbiAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHNwZWNpZmllclJhdyk7XG4gIGlmICghcmVzcC5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBFbmNvdW50ZXJlZCBzdGF0dXMgY29kZSAke3Jlc3Auc3RhdHVzfSB3aGlsZSBmZXRjaGluZyAke3NwZWNpZmllclJhd30uYCxcbiAgICApO1xuICB9XG5cbiAgY29uc3QgY29udGVudFR5cGUgPSByZXNwLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICBjb25zdCBsb2FkZXIgPSBtYXBDb250ZW50VHlwZVRvTG9hZGVyKFxuICAgIG5ldyBVUkwocmVzcC51cmwgfHwgc3BlY2lmaWVyUmF3KSxcbiAgICBjb250ZW50VHlwZSxcbiAgKTtcblxuICBjb25zdCBjb250ZW50cyA9IG5ldyBVaW50OEFycmF5KGF3YWl0IHJlc3AuYXJyYXlCdWZmZXIoKSk7XG5cbiAgcmV0dXJuIHsgY29udGVudHMsIGxvYWRlciB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkV2l0aFJlYWRGaWxlKHNwZWNpZmllcjogVVJMKTogUHJvbWlzZTxlc2J1aWxkLk9uTG9hZFJlc3VsdD4ge1xuICBjb25zdCBwYXRoID0gZnJvbUZpbGVVcmwoc3BlY2lmaWVyKTtcblxuICBjb25zdCBsb2FkZXIgPSBtYXBDb250ZW50VHlwZVRvTG9hZGVyKHNwZWNpZmllciwgbnVsbCk7XG4gIGNvbnN0IGNvbnRlbnRzID0gYXdhaXQgRGVuby5yZWFkRmlsZShwYXRoKTtcblxuICByZXR1cm4geyBjb250ZW50cywgbG9hZGVyIH07XG59XG5cbmZ1bmN0aW9uIG1hcENvbnRlbnRUeXBlVG9Mb2FkZXIoXG4gIHNwZWNpZmllcjogVVJMLFxuICBjb250ZW50VHlwZTogc3RyaW5nIHwgbnVsbCxcbik6IGVzYnVpbGQuTG9hZGVyIHtcbiAgY29uc3QgbWVkaWFUeXBlID0gbWFwQ29udGVudFR5cGUoc3BlY2lmaWVyLCBjb250ZW50VHlwZSk7XG4gIHN3aXRjaCAobWVkaWFUeXBlKSB7XG4gICAgY2FzZSBcIkphdmFTY3JpcHRcIjpcbiAgICBjYXNlIFwiTWpzXCI6XG4gICAgICByZXR1cm4gXCJqc1wiO1xuICAgIGNhc2UgXCJKU1hcIjpcbiAgICAgIHJldHVybiBcImpzeFwiO1xuICAgIGNhc2UgXCJUeXBlU2NyaXB0XCI6XG4gICAgY2FzZSBcIk10c1wiOlxuICAgICAgcmV0dXJuIFwidHNcIjtcbiAgICBjYXNlIFwiVFNYXCI6XG4gICAgICByZXR1cm4gXCJ0c3hcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5oYW5kbGVkIG1lZGlhIHR5cGUgJHttZWRpYVR5cGV9LiBDb250ZW50IHR5cGUgaXMgJHtjb250ZW50VHlwZX0uYCxcbiAgICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwQ29udGVudFR5cGUoXG4gIHNwZWNpZmllcjogVVJMLFxuICBjb250ZW50VHlwZTogc3RyaW5nIHwgbnVsbCxcbik6IGRlbm8uTWVkaWFUeXBlIHtcbiAgaWYgKGNvbnRlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgY29udGVudFR5cGVzID0gY29udGVudFR5cGUuc3BsaXQoXCI7XCIpO1xuICAgIGNvbnN0IG1lZGlhVHlwZSA9IGNvbnRlbnRUeXBlc1swXS50b0xvd2VyQ2FzZSgpO1xuICAgIHN3aXRjaCAobWVkaWFUeXBlKSB7XG4gICAgICBjYXNlIFwiYXBwbGljYXRpb24vdHlwZXNjcmlwdFwiOlxuICAgICAgY2FzZSBcInRleHQvdHlwZXNjcmlwdFwiOlxuICAgICAgY2FzZSBcInZpZGVvL3ZuZC5kbG5hLm1wZWctdHRzXCI6XG4gICAgICBjYXNlIFwidmlkZW8vbXAydFwiOlxuICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL3gtdHlwZXNjcmlwdFwiOlxuICAgICAgICByZXR1cm4gbWFwSnNMaWtlRXh0ZW5zaW9uKHNwZWNpZmllciwgXCJUeXBlU2NyaXB0XCIpO1xuICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIjpcbiAgICAgIGNhc2UgXCJ0ZXh0L2phdmFzY3JpcHRcIjpcbiAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9lY21hc2NyaXB0XCI6XG4gICAgICBjYXNlIFwidGV4dC9lY21hc2NyaXB0XCI6XG4gICAgICBjYXNlIFwiYXBwbGljYXRpb24veC1qYXZhc2NyaXB0XCI6XG4gICAgICBjYXNlIFwiYXBwbGljYXRpb24vbm9kZVwiOlxuICAgICAgICByZXR1cm4gbWFwSnNMaWtlRXh0ZW5zaW9uKHNwZWNpZmllciwgXCJKYXZhU2NyaXB0XCIpO1xuICAgICAgY2FzZSBcInRleHQvanN4XCI6XG4gICAgICAgIHJldHVybiBcIkpTWFwiO1xuICAgICAgY2FzZSBcInRleHQvdHN4XCI6XG4gICAgICAgIHJldHVybiBcIlRTWFwiO1xuICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL2pzb25cIjpcbiAgICAgIGNhc2UgXCJ0ZXh0L2pzb25cIjpcbiAgICAgICAgcmV0dXJuIFwiSnNvblwiO1xuICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL3dhc21cIjpcbiAgICAgICAgcmV0dXJuIFwiV2FzbVwiO1xuICAgICAgY2FzZSBcInRleHQvcGxhaW5cIjpcbiAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjpcbiAgICAgICAgcmV0dXJuIG1lZGlhVHlwZUZyb21TcGVjaWZpZXIoc3BlY2lmaWVyKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIlVua25vd25cIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG1lZGlhVHlwZUZyb21TcGVjaWZpZXIoc3BlY2lmaWVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBKc0xpa2VFeHRlbnNpb24oXG4gIHNwZWNpZmllcjogVVJMLFxuICBkZWZhdWx0VHlwZTogZGVuby5NZWRpYVR5cGUsXG4pOiBkZW5vLk1lZGlhVHlwZSB7XG4gIGNvbnN0IHBhdGggPSBzcGVjaWZpZXIucGF0aG5hbWU7XG4gIHN3aXRjaCAoZXh0bmFtZShwYXRoKSkge1xuICAgIGNhc2UgXCIuanN4XCI6XG4gICAgICByZXR1cm4gXCJKU1hcIjtcbiAgICBjYXNlIFwiLm1qc1wiOlxuICAgICAgcmV0dXJuIFwiTWpzXCI7XG4gICAgY2FzZSBcIi5janNcIjpcbiAgICAgIHJldHVybiBcIkNqc1wiO1xuICAgIGNhc2UgXCIudHN4XCI6XG4gICAgICByZXR1cm4gXCJUU1hcIjtcbiAgICBjYXNlIFwiLnRzXCI6XG4gICAgICBpZiAocGF0aC5lbmRzV2l0aChcIi5kLnRzXCIpKSB7XG4gICAgICAgIHJldHVybiBcIkR0c1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRUeXBlO1xuICAgICAgfVxuICAgIGNhc2UgXCIubXRzXCI6IHtcbiAgICAgIGlmIChwYXRoLmVuZHNXaXRoKFwiLmQubXRzXCIpKSB7XG4gICAgICAgIHJldHVybiBcIkRtdHNcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VHlwZSA9PSBcIkphdmFTY3JpcHRcIiA/IFwiTWpzXCIgOiBcIk10c1wiO1xuICAgICAgfVxuICAgIH1cbiAgICBjYXNlIFwiLmN0c1wiOiB7XG4gICAgICBpZiAocGF0aC5lbmRzV2l0aChcIi5kLmN0c1wiKSkge1xuICAgICAgICByZXR1cm4gXCJEY3RzXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFR5cGUgPT0gXCJKYXZhU2NyaXB0XCIgPyBcIkNqc1wiIDogXCJDdHNcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkZWZhdWx0VHlwZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZWRpYVR5cGVGcm9tU3BlY2lmaWVyKHNwZWNpZmllcjogVVJMKTogZGVuby5NZWRpYVR5cGUge1xuICBjb25zdCBwYXRoID0gc3BlY2lmaWVyLnBhdGhuYW1lO1xuICBzd2l0Y2ggKGV4dG5hbWUocGF0aCkpIHtcbiAgICBjYXNlIFwiXCI6XG4gICAgICBpZiAocGF0aC5lbmRzV2l0aChcIi8udHNidWlsZGluZm9cIikpIHtcbiAgICAgICAgcmV0dXJuIFwiVHNCdWlsZEluZm9cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIlVua25vd25cIjtcbiAgICAgIH1cbiAgICBjYXNlIFwiLnRzXCI6XG4gICAgICBpZiAocGF0aC5lbmRzV2l0aChcIi5kLnRzXCIpKSB7XG4gICAgICAgIHJldHVybiBcIkR0c1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiVHlwZVNjcmlwdFwiO1xuICAgICAgfVxuICAgIGNhc2UgXCIubXRzXCI6XG4gICAgICBpZiAocGF0aC5lbmRzV2l0aChcIi5kLm10c1wiKSkge1xuICAgICAgICByZXR1cm4gXCJEbXRzXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJNdHNcIjtcbiAgICAgIH1cbiAgICBjYXNlIFwiLmN0c1wiOlxuICAgICAgaWYgKHBhdGguZW5kc1dpdGgoXCIuZC5jdHNcIikpIHtcbiAgICAgICAgcmV0dXJuIFwiRGN0c1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiQ3RzXCI7XG4gICAgICB9XG4gICAgY2FzZSBcIi50c3hcIjpcbiAgICAgIHJldHVybiBcIlRTWFwiO1xuICAgIGNhc2UgXCIuanNcIjpcbiAgICAgIHJldHVybiBcIkphdmFTY3JpcHRcIjtcbiAgICBjYXNlIFwiLmpzeFwiOlxuICAgICAgcmV0dXJuIFwiSlNYXCI7XG4gICAgY2FzZSBcIi5tanNcIjpcbiAgICAgIHJldHVybiBcIk1qc1wiO1xuICAgIGNhc2UgXCIuY2pzXCI6XG4gICAgICByZXR1cm4gXCJDanNcIjtcbiAgICBjYXNlIFwiLmpzb25cIjpcbiAgICAgIHJldHVybiBcIkpzb25cIjtcbiAgICBjYXNlIFwiLndhc21cIjpcbiAgICAgIHJldHVybiBcIldhc21cIjtcbiAgICBjYXNlIFwiLnRzYnVpbGRpbmZvXCI6XG4gICAgICByZXR1cm4gXCJUc0J1aWxkSW5mb1wiO1xuICAgIGNhc2UgXCIubWFwXCI6XG4gICAgICByZXR1cm4gXCJTb3VyY2VNYXBcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwiVW5rbm93blwiO1xuICB9XG59XG4iXX0=