import Link from "next/link";

export default function CollegeBoard() {
  return (
    <Link
      className="flex max-w-xs flex-col gap-4 rounded-xl border border-slate-400 bg-white/10 p-4 hover:bg-white/20"
      href="https://create.t3.gg/en/usage/first-steps"
      target="_blank"
    >
      <h3 className="text-2xl font-bold">First Steps →</h3>
      <div className="text-lg">
        Just the basics - Everything you need to know to set up your database
        and authentication.
      </div>
    </Link>
  );
}
