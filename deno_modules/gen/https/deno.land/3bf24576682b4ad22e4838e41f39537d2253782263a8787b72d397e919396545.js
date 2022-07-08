export const INTERNAL_PREFIX = "/_frsh";
export const ASSET_CACHE_BUST_KEY = "__frsh_c";
export const IS_BROWSER = typeof document !== "undefined";
export function asset(path) {
    if (!path.startsWith("/") || path.startsWith("//"))
        return path;
    try {
        const url = new URL(path, "https://freshassetcache.local");
        if (url.protocol !== "https:" || url.host !== "freshassetcache.local" ||
            url.searchParams.has(ASSET_CACHE_BUST_KEY)) {
            return path;
        }
        url.searchParams.set(ASSET_CACHE_BUST_KEY, __FRSH_BUILD_ID);
        return url.pathname + url.search + url.hash;
    }
    catch (err) {
        console.warn(`Failed to create asset() URL, falling back to regular path ('${path}'):`, err);
        return path;
    }
}
export function assetSrcSet(srcset) {
    if (srcset.includes("("))
        return srcset;
    const parts = srcset.split(",");
    const constructed = [];
    for (const part of parts) {
        const trimmed = part.trimStart();
        const leadingWhitespace = part.length - trimmed.length;
        if (trimmed === "")
            return srcset;
        let urlEnd = trimmed.indexOf(" ");
        if (urlEnd === -1)
            urlEnd = trimmed.length;
        const leading = part.substring(0, leadingWhitespace);
        const url = trimmed.substring(0, urlEnd);
        const trailing = trimmed.substring(urlEnd);
        constructed.push(leading + asset(url) + trailing);
    }
    return constructed.join(",");
}
export function assetHashingHook(vnode) {
    if (vnode.type === "img" || vnode.type === "source") {
        const { props } = vnode;
        if (props["data-fresh-disable-lock"])
            return;
        if (typeof props.src === "string") {
            props.src = asset(props.src);
        }
        if (typeof props.srcset === "string") {
            props.srcset = assetSrcSet(props.srcset);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLFVBQVUsQ0FBQztBQUUvQyxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDO0FBTzFELE1BQU0sVUFBVSxLQUFLLENBQUMsSUFBWTtJQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ2hFLElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQUMzRCxJQUNFLEdBQUcsQ0FBQyxRQUFRLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssdUJBQXVCO1lBQ2pFLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEVBQzFDO1lBQ0EsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7S0FDN0M7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZ0VBQWdFLElBQUksS0FBSyxFQUN6RSxHQUFHLENBQ0osQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDO0FBR0QsTUFBTSxVQUFVLFdBQVcsQ0FBQyxNQUFjO0lBQ3hDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFBRSxPQUFPLE1BQU0sQ0FBQztJQUN4QyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN2QixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtRQUN4QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDdkQsSUFBSSxPQUFPLEtBQUssRUFBRTtZQUFFLE9BQU8sTUFBTSxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDM0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNyRCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztLQUNuRDtJQUNELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixLQUlFO0lBRUYsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUNuRCxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDO1lBQUUsT0FBTztRQUM3QyxJQUFJLE9BQU8sS0FBSyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDakMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ3BDLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxQztLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZOb2RlIH0gZnJvbSBcInByZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgSU5URVJOQUxfUFJFRklYID0gXCIvX2Zyc2hcIjtcbmV4cG9ydCBjb25zdCBBU1NFVF9DQUNIRV9CVVNUX0tFWSA9IFwiX19mcnNoX2NcIjtcblxuZXhwb3J0IGNvbnN0IElTX0JST1dTRVIgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG5cbi8qKlxuICogQ3JlYXRlIGEgXCJsb2NrZWRcIiBhc3NldCBwYXRoLiBUaGlzIGRpZmZlcnMgZnJvbSBhIHBsYWluIHBhdGggaW4gdGhhdCBpdCBpc1xuICogc3BlY2lmaWMgdG8gdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgYXBwbGljYXRpb24sIGFuZCBhcyBzdWNoIGNhbiBiZSBzYWZlbHlcbiAqIHNlcnZlZCB3aXRoIGEgdmVyeSBsb25nIGNhY2hlIGxpZmV0aW1lICgxIHllYXIpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXQocGF0aDogc3RyaW5nKSB7XG4gIGlmICghcGF0aC5zdGFydHNXaXRoKFwiL1wiKSB8fCBwYXRoLnN0YXJ0c1dpdGgoXCIvL1wiKSkgcmV0dXJuIHBhdGg7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChwYXRoLCBcImh0dHBzOi8vZnJlc2hhc3NldGNhY2hlLmxvY2FsXCIpO1xuICAgIGlmIChcbiAgICAgIHVybC5wcm90b2NvbCAhPT0gXCJodHRwczpcIiB8fCB1cmwuaG9zdCAhPT0gXCJmcmVzaGFzc2V0Y2FjaGUubG9jYWxcIiB8fFxuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5oYXMoQVNTRVRfQ0FDSEVfQlVTVF9LRVkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoQVNTRVRfQ0FDSEVfQlVTVF9LRVksIF9fRlJTSF9CVUlMRF9JRCk7XG4gICAgcmV0dXJuIHVybC5wYXRobmFtZSArIHVybC5zZWFyY2ggKyB1cmwuaGFzaDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYEZhaWxlZCB0byBjcmVhdGUgYXNzZXQoKSBVUkwsIGZhbGxpbmcgYmFjayB0byByZWd1bGFyIHBhdGggKCcke3BhdGh9Jyk6YCxcbiAgICAgIGVycixcbiAgICApO1xuICAgIHJldHVybiBwYXRoO1xuICB9XG59XG5cbi8qKiBBcHBseSB0aGUgYGFzc2V0YCBmdW5jdGlvbiB0byB1cmxzIGluIGEgYHNyY3NldGAgYXR0cmlidXRlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2V0U3JjU2V0KHNyY3NldDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHNyY3NldC5pbmNsdWRlcyhcIihcIikpIHJldHVybiBzcmNzZXQ7IC8vIEJhaWwgaWYgdGhlIHNyY3NldCBjb250YWlucyBjb21wbGljYXRlZCBzeW50YXguXG4gIGNvbnN0IHBhcnRzID0gc3Jjc2V0LnNwbGl0KFwiLFwiKTtcbiAgY29uc3QgY29uc3RydWN0ZWQgPSBbXTtcbiAgZm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSB7XG4gICAgY29uc3QgdHJpbW1lZCA9IHBhcnQudHJpbVN0YXJ0KCk7XG4gICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2UgPSBwYXJ0Lmxlbmd0aCAtIHRyaW1tZWQubGVuZ3RoO1xuICAgIGlmICh0cmltbWVkID09PSBcIlwiKSByZXR1cm4gc3Jjc2V0OyAvLyBCYWlsIGlmIHRoZSBzcmNzZXQgaXMgbWFsZm9ybWVkLlxuICAgIGxldCB1cmxFbmQgPSB0cmltbWVkLmluZGV4T2YoXCIgXCIpO1xuICAgIGlmICh1cmxFbmQgPT09IC0xKSB1cmxFbmQgPSB0cmltbWVkLmxlbmd0aDtcbiAgICBjb25zdCBsZWFkaW5nID0gcGFydC5zdWJzdHJpbmcoMCwgbGVhZGluZ1doaXRlc3BhY2UpO1xuICAgIGNvbnN0IHVybCA9IHRyaW1tZWQuc3Vic3RyaW5nKDAsIHVybEVuZCk7XG4gICAgY29uc3QgdHJhaWxpbmcgPSB0cmltbWVkLnN1YnN0cmluZyh1cmxFbmQpO1xuICAgIGNvbnN0cnVjdGVkLnB1c2gobGVhZGluZyArIGFzc2V0KHVybCkgKyB0cmFpbGluZyk7XG4gIH1cbiAgcmV0dXJuIGNvbnN0cnVjdGVkLmpvaW4oXCIsXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXRIYXNoaW5nSG9vayhcbiAgdm5vZGU6IFZOb2RlPHtcbiAgICBzcmM/OiBzdHJpbmc7XG4gICAgc3Jjc2V0Pzogc3RyaW5nO1xuICAgIFtcImRhdGEtZnJlc2gtZGlzYWJsZS1sb2NrXCJdPzogYm9vbGVhbjtcbiAgfT4sXG4pIHtcbiAgaWYgKHZub2RlLnR5cGUgPT09IFwiaW1nXCIgfHwgdm5vZGUudHlwZSA9PT0gXCJzb3VyY2VcIikge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHZub2RlO1xuICAgIGlmIChwcm9wc1tcImRhdGEtZnJlc2gtZGlzYWJsZS1sb2NrXCJdKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBwcm9wcy5zcmMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHByb3BzLnNyYyA9IGFzc2V0KHByb3BzLnNyYyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcHJvcHMuc3Jjc2V0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBwcm9wcy5zcmNzZXQgPSBhc3NldFNyY1NldChwcm9wcy5zcmNzZXQpO1xuICAgIH1cbiAgfVxufVxuIl19