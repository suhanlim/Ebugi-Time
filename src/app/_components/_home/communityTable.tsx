import Image from "next/image";
import Link from "next/link";
import TableEntry from "./communityTableEntry";
export default function CommunityTable() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
    </div>
  );
}
