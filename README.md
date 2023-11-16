# How to Start?


### 1. pnpm install 

https://pnpm.io/installation

### Download Using npm
We provide two packages of pnpm CLI, pnpm and @pnpm/exe.

- `pnpm` is a ordinary version of pnpm, which needs Node.js to run.
- `@pnpm/exe` is packaged with Node.js into an executable, so it may be used on a system with no Node.js installed.

```
npm install -g pnpm
```

### 2. (Window) 관리자 권한 CMD or Power Shell (Mac or Linux) CLI 

```
pnpm install -g pnpm
pnpm run dev
```
Error: @prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.
solution: 
```
npx prisma generate
```
- Cause: first boot Prisma need client generate
- More detail: https://github.com/prisma/prisma/discussions/21391,
-  https://www.prisma.io/docs/concepts/components/prisma-client/working-with-  prismaclient/generating-prisma-client

# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

