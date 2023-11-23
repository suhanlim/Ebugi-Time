import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  getAllCategory: publicProcedure.input(z.object({})).query(({ ctx }) => {
    return ctx.db.category.findMany({});
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
