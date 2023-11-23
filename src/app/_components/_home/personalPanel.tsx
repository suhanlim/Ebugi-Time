"use client";
import Image from "next/image";
import Link from "next/link";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { api } from "~/trpc/react";

export function PersonalPanel() {
  // to do get session user info
  const session = "0613ffcf-cee3-490b-8642-65d206d7bed6";
  const userInfo = api.user.getProfileInfo.useQuery({ userId: session });
  return (
    <div className="hidden gap-2 px-2 py-4 2xl:block">
      <div className="card mx-2 my-4 w-56 bg-base-200 shadow-xl">
        <figure className="px-2 pt-2">
          <Image
            src={userInfo.data?.image_url ?? "/assets/logo.png"}
            alt="User Profile"
            width={80} // Set the width as needed
            height={80} // Set the height as needed
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{userInfo.data?.nickname}</h2>
          <p>
            {userInfo.data?.grade} {userInfo.data?.name}
          </p>
          <div className="card-actions">
            <Link href="/profile/1">
              <button className="btn btn-primary">My Page</button>
            </Link>
          </div>
        </div>
      </div>

      <ul className="menu rounded-box mx-2 my-4 w-56 bg-base-200 shadow-xl">
        <li>
          <Link href="/myarticle">
            <TocOutlinedIcon />
            내가 쓴 글
          </Link>
        </li>
        <li>
          <Link href="/mycommentarticle">
            <ChatOutlinedIcon />
            댓글 단 글
          </Link>
        </li>
        <li>
          <Link href="/myscrap">
            <GradeOutlinedIcon />내 스크랩
          </Link>
        </li>
      </ul>
    </div>
  );
}
