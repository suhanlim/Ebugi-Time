import Link from "next/link";
import { type Metadata } from "next";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Submenu from "./_components/_home/submenu";
import LeftSide from "./_components/_home/leftSide";
import BordCollection from "./_components/_home/boardCollection";
import Search from "./_components/_home/search";
import RightSide from "./_components/_home/rightSide";

export const metadata: Metadata = {
  title: {
    template: "%s | Home",
    default: "Ebugi Home",
  },
  description: "EveryTime clone coding",
};

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="bg-white">
      <Submenu />
      <div className="flex flex-row justify-center">
        <LeftSide />
        <BordCollection />
        <RightSide />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
