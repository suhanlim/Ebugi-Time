export function CollegeWidgetSkeleton() {
  return (
    <div className="card flex flex-col bg-base-100 shadow-xl">
      <div className="card-body animate-pulse ">
        <div className=" h-80 w-60 overflow-x-auto">
          <div className="h-6 w-3/4 rounded bg-gray-300"></div>
          <div className="mt-4 h-4 w-1/2 rounded bg-gray-300"></div>
          <div className="mt-2 h-4 w-1/3 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
