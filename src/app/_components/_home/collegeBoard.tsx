import Link from "next/link";
import Table from "./communityTable";
export default function CollegeBoard() {
  return (
    <div className="flex max-w-xs flex-col gap-4 rounded-xl border border-slate-400 bg-white/10 p-4 hover:bg-white/20">
      <Link href="https://create.t3.gg/en/usage/first-steps" target="_blank">
        <h3 className="text-2xl font-bold">First Steps →</h3>
      </Link>
      <Table />
    </div>
  );
}
