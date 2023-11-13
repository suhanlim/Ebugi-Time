import { CollegeWidget } from "./collegeWidget";

export function CollegePanel() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-white px-2 py-4">
      <div className="grid min-w-max grid-cols-1 gap-2 sm:grid-cols-2 md:gap-2 lg:grid-cols-2">
        <CollegeWidget />
        <CollegeWidget />
        <CollegeWidget />
        <CollegeWidget />
      </div>
    </div>
  );
}