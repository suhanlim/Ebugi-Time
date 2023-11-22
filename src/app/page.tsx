import { type Metadata } from "next";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Submenu } from "./_components/_home/submenu";
import { CollegePanel } from "~/app/_components/_home/collegePanel";
import { PersonalPanel } from "./_components/_home/personalPanel";
import { MultipurposePanel } from "./_components/_common/multipurposePanel";
import { Navigation } from "./_components/_common/navigation";

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
      <Navigation />
      <Submenu />
      <div className="flex flex-row justify-center">
        <PersonalPanel />
        <CollegePanel />
        <MultipurposePanel />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  return <CreatePost />;
}
