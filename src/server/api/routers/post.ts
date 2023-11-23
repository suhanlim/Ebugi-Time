import { Category } from "@mui/icons-material";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getCategoryPosts: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.post.findMany({
        where: { category: input.category, is_deleted: false },
        take: 4,
        orderBy: {
          createdAt: "desc",
        },
      });
    }),

  getOwnPosts: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.post.findMany({
        where: { createdById: input.id },
        select: {
          likes: true,
          category: true,
          scraps: true,
          comments: true,
          title: true,
          contents: true,
          updatedAt: true,
          image_url: true,
        },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        userid: z.string(),
        title: z.string().min(1),
        category: z.string(),
        content: z.string(),
        image_url: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          title: input.title,
          contents: input.content,
          category: input.category,
          is_deleted: false,
          createdBy: { connect: { id: input.userid } },
          likes: 0,
          image_url: input.image_url,
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
