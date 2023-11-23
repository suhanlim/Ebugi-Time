import { CollegeWidget } from "./collegeWidget";

type CategoryProps = {
  category: {
    id: string;
    name: string;
  }[];
};

export function CollegePanel({ category }: CategoryProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-white pb-10 pt-3">
      <div className="grid min-w-max grid-cols-1 gap-2 sm:grid-cols-2 md:gap-2 lg:grid-cols-2">
        {category.map((v) => (
          <CollegeWidget key={v.id} category={v} />
        ))}
      </div>
    </div>
  );
}
