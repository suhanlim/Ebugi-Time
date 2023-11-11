import Search from "./search";
import Board from "./board";
import CountDown from "./countDown";
import HotBoard from "./hotBoard";
export default function RightSide() {
  return (
    <div className="flex flex-col gap-2 px-2 py-4">
      <CountDown />
      <div className=" flex items-center justify-between ">
        <Search placeholder="전체 게시판의 글을 검색하세요!" />
      </div>
      <HotBoard />
      <Board />
    </div>
  );
}
