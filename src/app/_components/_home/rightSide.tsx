import Search from "./search";
import Board from "./board";

export default function RightSide() {
  return (
    <div className="flex flex-col">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="전체 게시판의 글을 검색하세요!" />
      </div>
      <Board />
    </div>
  );
}
