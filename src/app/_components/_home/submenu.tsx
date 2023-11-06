"use client";
import SubmeauEntry from "./submeauEntry";

type PathType = { name: string; href: string };
const links: PathType[] = [
  { name: "자유게시판", href: "/" },
  { name: "컴퓨터공학부 게시판", href: "/" },
  { name: "기계전자공학부 게시판", href: "/" },
  { name: "스마트경영공학부 게시판", href: "/" },
  { name: "스마트제조혁신컨설팅학과 게시판", href: "/" },
  { name: "크리에이티브 인문학부 게시판", href: "/" },
  { name: "예술학부 게시판", href: "/" },
  { name: "사회과학부 게시판", href: "/" },
  { name: "글로벌패션산업학부 게시판", href: "/" },
  { name: "ICT디자인학부 게시판", href: "/" },
  { name: "뷰티디자인매니지먼트학과 게시판", href: "/" },
  { name: "문학문화콘텐츠학과 게시판", href: "/" },
  { name: "AI응용학과 게시판", href: "/" },
  { name: "융합보안학과 게시판", href: "/" },
  { name: "미래모빌리티학과 게시판", href: "/" },
  { name: "졸업생게시판", href: "/" },
  { name: "새내기게시판", href: "/" },
  { name: "시사 이슈", href: "/" },
  { name: "정보게시판", href: "/" },
  { name: "홍보게시판", href: "/" },
  { name: "동아리 학회", href: "/" },
  { name: "취업 진로", href: "/" },
  { name: "장터게시판", href: "/" },
  { name: "상빌 주민", href: "/" },
  { name: "끝말잇기 게시판", href: "/" },
  { name: "덕후게시판", href: "/" },
  { name: "성소수자 게시판", href: "/" },
  { name: "헬스 게시판", href: "/" },
];

const linkMatrix = chunkArray<PathType>(links, 6);

function chunkArray<T>(array: T[], size: number) {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

export default function Submenu() {
  return (
    <div className="flex flex-row justify-center bg-sky-50">
      {linkMatrix.map((links, i) => {
        return <SubmeauEntry key={links[0]?.name ?? i} items={links} />;
      })}
    </div>
  );
}
