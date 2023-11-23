import { CollegeTableEntry } from "./collegeTableEntry";
export function CollegeTable({ categoryId }: { categoryId: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>User</th>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <CollegeTableEntry />
          <CollegeTableEntry />
          <CollegeTableEntry />
          <CollegeTableEntry />
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
    </div>
  );
}
