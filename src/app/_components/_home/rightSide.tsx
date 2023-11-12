import Search from "./search";
import CountDown from "./countDown";
import HotBoard from "./hotBoard";
import LectureBoard from "./lectureEvaluationBoard";
export default function RightSide() {
  return (
    <div className=" flex max-w-sm flex-col gap-2 px-2 py-4">
      <CountDown />
      <div className=" flex items-center justify-between ">
        <Search placeholder="전체 게시판의 글을 검색하세요!" />
      </div>
      <HotBoard />
      <LectureBoard />
    </div>
  );
}
