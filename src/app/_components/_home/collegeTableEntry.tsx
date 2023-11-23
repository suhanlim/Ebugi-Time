"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import dayjs from "~/utils/dayjs";
import { api } from "~/trpc/react";

interface PostDate {
  title: string;
  likes: number;
  updatedAt: Date;
  id: number;
  createById: string;
}

export function CollegeTableEntry({ data }: { data: PostDate }) {
  const userInfo = api.user.getProfileInfo.useQuery({
    userId: data.createById,
  });
  const router = useRouter();
  const goRouteId = (id: number) => {
    router.push(`/post/${id}`);
  };
  return (
    <tr className=" hover:bg-sky-100 " onClick={() => goRouteId(data.id)}>
      <td>
        <div className="flex items-center space-x-3">
          <div className="mask mask-squircle flex h-12 w-12 bg-indigo-500">
            <Image
              className="object-contain p-1"
              src={userInfo.data?.image_url ?? "/assets/logo.png"}
              alt="User Profile"
              height={90}
              width={64}
            />
          </div>
          <div className="flex-1 text-sm">
            <div className="font-bold">{userInfo.data?.nickname}</div>
            <div className=" opacity-50"> {userInfo.data?.grade}</div>
          </div>
        </div>
      </td>
      <td className="text-xs">
        <div className="line-clamp-1 ">{data.title}</div>
        <span className="badge badge-ghost badge-xs ">
          likes: {data.likes}{" "}
        </span>
      </td>
      <td className="text-xs">
        {dayjs(data.updatedAt).format("L")}
        <br />
        <span className="text-xs"> {dayjs(data.updatedAt).format("LT")}</span>
      </td>
    </tr>
  );
}
