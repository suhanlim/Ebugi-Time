import { CollegeWidgetSkeleton } from "./collegeWidgetSkeleton";

export function CollegePanelSkeleton() {
  return (
    <div className="flex max-w-screen-lg flex-col items-center justify-center bg-white pb-10 pt-3">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-2 lg:grid-cols-2">
        <CollegeWidgetSkeleton />
        <CollegeWidgetSkeleton />
        <CollegeWidgetSkeleton />
        <CollegeWidgetSkeleton />
      </div>
    </div>
  );
}
