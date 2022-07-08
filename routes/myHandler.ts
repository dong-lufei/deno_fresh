import { HandlerContext, Handlers, } from "$fresh/server.ts";

export const handler: Handlers<any, { data: string }> = {
  GET(_req: Request, ctx: HandlerContext) {
    return new Response(`middleware data is ${ctx.state.data}`);
  },
};