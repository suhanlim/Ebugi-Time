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
          <div className="flex-1">
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          key word: hansung university
        </span>
      </td>
      <td className="text-xs">11/12 13:12</td>
    </tr>
  );
}
