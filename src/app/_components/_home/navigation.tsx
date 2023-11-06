// components/Navigation.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-gray-200 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2">
        <div id="logo" className="flex items-center">
          <Link href="/">
            <Image src="/assets/logo.png" alt="Logo" width={64} height={90} />
          </Link>
          <div className="ml-3 flex flex-col whitespace-nowrap text-xl font-semibold dark:text-white">
            <span className="text-sm text-blue-700">에부기타임</span>
            <span className="">한성대</span>
          </div>
        </div>
        <div id="account" className="flex items-center md:order-2">
          <Link href="/message" title="쪽지함">
            <span className="rounded p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <ForumRoundedIcon />
            </span>
          </Link>
          <Link href="/my" title="내 정보">
            <span className="rounded p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <PersonOutlineRoundedIcon />
            </span>
          </Link>
        </div>
        <ul
          id="menu"
          className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8"
        >
          <li>
            <Link href="/">
              <span
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-lg font-bold text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                게시판
              </span>
            </Link>
          </li>
          <li>
            <Link href="/timetable">
              <span className="block rounded py-2 pl-3 pr-4 text-lg font-bold text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                시간표
              </span>
            </Link>
          </li>
          <li>
            <Link href="/lecture">
              <span className=" block rounded py-2 pl-3 pr-4 text-lg font-bold text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                강의실
              </span>
            </Link>
          </li>
          <li>
            <Link href="/calculator">
              <span className="block rounded  py-2 pl-3 pr-4 text-lg font-bold text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                학점계산기
              </span>
            </Link>
          </li>
          <li>
            <Link href="/friend">
              <span className="block rounded  py-2 pl-3 pr-4 text-lg font-bold text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                친구
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
