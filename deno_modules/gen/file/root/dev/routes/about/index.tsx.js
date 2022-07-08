import { h } from "preact";
export const handler = {
    async GET(req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "Hello");
        return resp;
    }
};
export default function AboutPage() {
    return (h("main", null,
        h("h1", null, "About"),
        h("p", null, "This is the about page.")));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLFFBQVEsQ0FBQTtBQUcxQixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWE7SUFDL0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUNoQixNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUM1QyxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7Q0FDRixDQUFBO0FBQ0QsTUFBTSxDQUFDLE9BQU8sVUFBVSxTQUFTO0lBQy9CLE9BQU8sQ0FDTDtRQUNFLHNCQUFjO1FBQ2QsdUNBQThCLENBQ3pCLENBQ1IsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBoICovXHJcbmltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCJcclxuaW1wb3J0IHsgSGFuZGxlcnMgfSBmcm9tIFwiJGZyZXNoL3NlcnZlci50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlcjogSGFuZGxlcnMgPSB7XHJcbiAgYXN5bmMgR0VUKHJlcSwgY3R4KSB7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgY3R4LnJlbmRlcigpXHJcbiAgICByZXNwLmhlYWRlcnMuc2V0KFwiWC1DdXN0b20tSGVhZGVyXCIsIFwiSGVsbG9cIilcclxuICAgIHJldHVybiByZXNwXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0UGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+XHJcbiAgICAgIDxoMT5BYm91dDwvaDE+XHJcbiAgICAgIDxwPlRoaXMgaXMgdGhlIGFib3V0IHBhZ2UuPC9wPlxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufVxyXG4iXX0=