import Link from "next/link";
import { CollegeTable } from "./collegeTable";

type Category = {
  category: {
    id: string;
    name: string;
  };
};

export function CollegeWidget({ category }: Category) {
  return (
    <div className="card flex flex-col bg-base-100 shadow-xl hover:bg-white/20">
      <div className="card-body">
        <Link href={`/${category.id}/post`} target="_blank">
          <h3 className=" text-2xl font-bold hover:text-blue-600">
            {category.name} →
          </h3>
        </Link>
        <CollegeTable categoryId={category.id} />
      </div>
    </div>
  );
}
