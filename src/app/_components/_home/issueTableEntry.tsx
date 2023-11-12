"use client";

import { useRouter } from "next/navigation";
export function IssueTableEntry() {
  const router = useRouter();
  const goRouteId = (id: number) => {
    router.push(`/post/${id}`);
  };
  return (
    <tr className=" hover:bg-sky-100 " onClick={() => goRouteId(1)}>
      <th>1</th>
      <td>Quality Control Specialist</td>
      <td className="text-xs">05:05</td>
    </tr>
  );
}
