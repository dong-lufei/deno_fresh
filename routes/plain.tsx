import {  Handlers,HandlerContext } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req: Request, ctx: HandlerContext) {

    // console.log(ctx);
    
    return new Response("Hello World");
  },
};