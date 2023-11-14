"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
export function CollegeTableEntry() {
  const router = useRouter();
  const goRouteId = (id: number) => {
    router.push(`/post/${id}`);
  };
  return (
    <tr className=" hover:bg-sky-100 " onClick={() => goRouteId(1)}>
      <td>
        <div className="flex items-center space-x-3">
          <div className="mask mask-squircle flex h-12 w-12 bg-indigo-500">
            <Image
              className="object-contain p-1"
              src="/assets/logo.png"
              alt="User Profile"
              height={90}
              width={64}
            />
          </div>
          <div className="flex-1 text-sm">
            <div className="font-bold">@nomer</div>
            <div className=" opacity-50">1971343</div>
          </div>
        </div>
      </td>
      <td className="text-xs">
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-xs">
          key word: hansung university
        </span>
      </td>
      <td className="text-xs">
        11/12 <br />
        <span className="text-xs">13:12</span>
      </td>
    </tr>
  );
}
