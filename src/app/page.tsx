import { type Metadata } from "next";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { redirect } from "next/navigation";
import { Submenu } from "./_components/_home/submenu";
import { PersonalPanel } from "./_components/_home/personalPanel";
import { MultipurposePanel } from "./_components/_common/multipurposePanel";
import { NavigationBar } from "./_components/_common/navigationBar";
import { CollegePanelSwiper } from "./_components/_home/collegePanelSwiper";
import { SubmenuSwiper } from "./_components/_home/submenuSwiper";
export const metadata: Metadata = {
  title: {
    template: "%s | Home",
    default: "Ebugi Home",
  },
  description: "EveryTime clone coding",
};

export default async function Home() {
  const session = await getServerAuthSession();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="bg-white">
      <NavigationBar />
      <SubmenuSwiper />
      <div className="flex flex-row justify-center">
        <PersonalPanel />
        <CollegePanelSwiper />
        <MultipurposePanel />
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
        <p className="truncate">Your most recent post: {latestPost.title}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
