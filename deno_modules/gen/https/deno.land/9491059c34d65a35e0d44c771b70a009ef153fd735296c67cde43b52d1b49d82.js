import { fromFileUrl } from "../deps.ts";
import * as deno from "./deno.ts";
export async function load(infoCache, url, options) {
    switch (url.protocol) {
        case "http:":
        case "https:":
        case "data:":
            return await loadFromCLI(infoCache, url, options);
        case "file:": {
            const res = await loadFromCLI(infoCache, url, options);
            res.watchFiles = [fromFileUrl(url.href)];
            return res;
        }
    }
    return null;
}
async function loadFromCLI(infoCache, specifier, options) {
    const specifierRaw = specifier.href;
    if (!infoCache.has(specifierRaw)) {
        const { modules, redirects } = await deno.info(specifier, {
            importMap: options.importMapURL?.href,
        });
        for (const module of modules) {
            infoCache.set(module.specifier, module);
        }
        for (const [specifier, redirect] of Object.entries(redirects)) {
            const redirected = infoCache.get(redirect);
            if (!redirected) {
                throw new TypeError("Unreachable.");
            }
            infoCache.set(specifier, redirected);
        }
    }
    const module = infoCache.get(specifierRaw);
    if (!module) {
        throw new TypeError("Unreachable.");
    }
    if (module.error)
        throw new Error(module.error);
    if (!module.local)
        throw new Error("Module not downloaded yet.");
    let loader;
    switch (module.mediaType) {
        case "JavaScript":
        case "Mjs":
            loader = "js";
            break;
        case "JSX":
            loader = "jsx";
            break;
        case "TypeScript":
        case "Mts":
            loader = "ts";
            break;
        case "TSX":
            loader = "tsx";
            break;
        default:
            throw new Error(`Unhandled media type ${module.mediaType}.`);
    }
    const contents = await Deno.readFile(module.local);
    return { contents, loader };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlX2xvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdGl2ZV9sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNsRCxPQUFPLEtBQUssSUFBSSxNQUFNLFdBQVcsQ0FBQztBQU1sQyxNQUFNLENBQUMsS0FBSyxVQUFVLElBQUksQ0FDeEIsU0FBd0MsRUFDeEMsR0FBUSxFQUNSLE9BQW9CO0lBRXBCLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRTtRQUNwQixLQUFLLE9BQU8sQ0FBQztRQUNiLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxPQUFPO1lBQ1YsT0FBTyxNQUFNLFdBQVcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELEtBQUssT0FBTyxDQUFDLENBQUM7WUFDWixNQUFNLEdBQUcsR0FBRyxNQUFNLFdBQVcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZELEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekMsT0FBTyxHQUFHLENBQUM7U0FDWjtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsS0FBSyxVQUFVLFdBQVcsQ0FDeEIsU0FBd0MsRUFDeEMsU0FBYyxFQUNkLE9BQW9CO0lBRXBCLE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDaEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3hELFNBQVMsRUFBRSxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUk7U0FDdEMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDNUIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsS0FBSyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDN0QsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLE1BQU0sSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDckM7WUFDRCxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN0QztLQUNGO0lBRUQsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsTUFBTSxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUNyQztJQUVELElBQUksTUFBTSxDQUFDLEtBQUs7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDakUsSUFBSSxNQUFzQixDQUFDO0lBQzNCLFFBQVEsTUFBTSxDQUFDLFNBQVMsRUFBRTtRQUN4QixLQUFLLFlBQVksQ0FBQztRQUNsQixLQUFLLEtBQUs7WUFDUixNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2QsTUFBTTtRQUNSLEtBQUssS0FBSztZQUNSLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDZixNQUFNO1FBQ1IsS0FBSyxZQUFZLENBQUM7UUFDbEIsS0FBSyxLQUFLO1lBQ1IsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNkLE1BQU07UUFDUixLQUFLLEtBQUs7WUFDUixNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2YsTUFBTTtRQUNSO1lBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7S0FDaEU7SUFDRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7QUFDOUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVzYnVpbGQsIGZyb21GaWxlVXJsIH0gZnJvbSBcIi4uL2RlcHMudHNcIjtcbmltcG9ydCAqIGFzIGRlbm8gZnJvbSBcIi4vZGVuby50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRPcHRpb25zIHtcbiAgaW1wb3J0TWFwVVJMPzogVVJMO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZChcbiAgaW5mb0NhY2hlOiBNYXA8c3RyaW5nLCBkZW5vLk1vZHVsZUVudHJ5PixcbiAgdXJsOiBVUkwsXG4gIG9wdGlvbnM6IExvYWRPcHRpb25zLFxuKTogUHJvbWlzZTxlc2J1aWxkLk9uTG9hZFJlc3VsdCB8IG51bGw+IHtcbiAgc3dpdGNoICh1cmwucHJvdG9jb2wpIHtcbiAgICBjYXNlIFwiaHR0cDpcIjpcbiAgICBjYXNlIFwiaHR0cHM6XCI6XG4gICAgY2FzZSBcImRhdGE6XCI6XG4gICAgICByZXR1cm4gYXdhaXQgbG9hZEZyb21DTEkoaW5mb0NhY2hlLCB1cmwsIG9wdGlvbnMpO1xuICAgIGNhc2UgXCJmaWxlOlwiOiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBsb2FkRnJvbUNMSShpbmZvQ2FjaGUsIHVybCwgb3B0aW9ucyk7XG4gICAgICByZXMud2F0Y2hGaWxlcyA9IFtmcm9tRmlsZVVybCh1cmwuaHJlZildO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRGcm9tQ0xJKFxuICBpbmZvQ2FjaGU6IE1hcDxzdHJpbmcsIGRlbm8uTW9kdWxlRW50cnk+LFxuICBzcGVjaWZpZXI6IFVSTCxcbiAgb3B0aW9uczogTG9hZE9wdGlvbnMsXG4pOiBQcm9taXNlPGVzYnVpbGQuT25Mb2FkUmVzdWx0PiB7XG4gIGNvbnN0IHNwZWNpZmllclJhdyA9IHNwZWNpZmllci5ocmVmO1xuICBpZiAoIWluZm9DYWNoZS5oYXMoc3BlY2lmaWVyUmF3KSkge1xuICAgIGNvbnN0IHsgbW9kdWxlcywgcmVkaXJlY3RzIH0gPSBhd2FpdCBkZW5vLmluZm8oc3BlY2lmaWVyLCB7XG4gICAgICBpbXBvcnRNYXA6IG9wdGlvbnMuaW1wb3J0TWFwVVJMPy5ocmVmLFxuICAgIH0pO1xuICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgIGluZm9DYWNoZS5zZXQobW9kdWxlLnNwZWNpZmllciwgbW9kdWxlKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbc3BlY2lmaWVyLCByZWRpcmVjdF0gb2YgT2JqZWN0LmVudHJpZXMocmVkaXJlY3RzKSkge1xuICAgICAgY29uc3QgcmVkaXJlY3RlZCA9IGluZm9DYWNoZS5nZXQocmVkaXJlY3QpO1xuICAgICAgaWYgKCFyZWRpcmVjdGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbnJlYWNoYWJsZS5cIik7XG4gICAgICB9XG4gICAgICBpbmZvQ2FjaGUuc2V0KHNwZWNpZmllciwgcmVkaXJlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbW9kdWxlID0gaW5mb0NhY2hlLmdldChzcGVjaWZpZXJSYXcpO1xuICBpZiAoIW1vZHVsZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbnJlYWNoYWJsZS5cIik7XG4gIH1cblxuICBpZiAobW9kdWxlLmVycm9yKSB0aHJvdyBuZXcgRXJyb3IobW9kdWxlLmVycm9yKTtcbiAgaWYgKCFtb2R1bGUubG9jYWwpIHRocm93IG5ldyBFcnJvcihcIk1vZHVsZSBub3QgZG93bmxvYWRlZCB5ZXQuXCIpO1xuICBsZXQgbG9hZGVyOiBlc2J1aWxkLkxvYWRlcjtcbiAgc3dpdGNoIChtb2R1bGUubWVkaWFUeXBlKSB7XG4gICAgY2FzZSBcIkphdmFTY3JpcHRcIjpcbiAgICBjYXNlIFwiTWpzXCI6XG4gICAgICBsb2FkZXIgPSBcImpzXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiSlNYXCI6XG4gICAgICBsb2FkZXIgPSBcImpzeFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlR5cGVTY3JpcHRcIjpcbiAgICBjYXNlIFwiTXRzXCI6XG4gICAgICBsb2FkZXIgPSBcInRzXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiVFNYXCI6XG4gICAgICBsb2FkZXIgPSBcInRzeFwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIG1lZGlhIHR5cGUgJHttb2R1bGUubWVkaWFUeXBlfS5gKTtcbiAgfVxuICBjb25zdCBjb250ZW50cyA9IGF3YWl0IERlbm8ucmVhZEZpbGUobW9kdWxlLmxvY2FsKTtcbiAgcmV0dXJuIHsgY29udGVudHMsIGxvYWRlciB9O1xufVxuIl19