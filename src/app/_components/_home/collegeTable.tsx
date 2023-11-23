import { CollegeTableEntry } from "./collegeTableEntry";
import { api } from "~/trpc/react";
export function CollegeTable({ categoryId }: { categoryId: string }) {
  const data = api.post.getCategoryPosts.useQuery({ category: categoryId });
  return (
    <div className="max-w-md overflow-x-auto">
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
          {data.data?.map((v) => (
            <CollegeTableEntry
              key={v.id}
              data={{
                title: v.title,
                likes: v.likes,
                updatedAt: v.updatedAt,
                id: v.id,
                createById: v.createdById,
              }}
            />
          ))}
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
    </div>
  );
}
