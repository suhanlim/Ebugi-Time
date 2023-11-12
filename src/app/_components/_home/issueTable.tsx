import { IssueTableEntry } from "./issueTableEntry";
export function IssueTable() {
  return (
    <div className="rounded-lg bg-base-200 shadow-xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Hot post</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <IssueTableEntry />
          {/* row 2 */}
          <IssueTableEntry />
          {/* row 3 */}
          <IssueTableEntry />
        </tbody>
      </table>
    </div>
  );
}
