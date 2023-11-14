import Link from "next/link";
import { CollegeTable } from "./collegeTable";
export function CollegeWidget() {
  return (
    <div className="card flex flex-col bg-base-100 shadow-xl hover:bg-white/20">
      <div className="card-body">
        <Link href="https://create.t3.gg/en/usage/first-steps" target="_blank">
          <h3 className=" text-2xl font-bold hover:text-blue-600">
            First Steps →
          </h3>
        </Link>
        <CollegeTable />
      </div>
    </div>
  );
}
