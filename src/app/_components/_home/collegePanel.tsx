import { CollegeWidget } from "./collegeWidget";

export function CollegePanel() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-white pb-10 pt-3">
      <div className="grid min-w-max grid-cols-1 gap-2 sm:grid-cols-2 md:gap-2 lg:grid-cols-2">
        <CollegeWidget />
        <CollegeWidget />
        <CollegeWidget />
        <CollegeWidget />
      </div>
    </div>
  );
}
