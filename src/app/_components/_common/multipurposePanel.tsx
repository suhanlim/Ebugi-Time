import Search from "../_home/search";
import { TimeWidget } from "../_home/timeWidget";
import { IssueTable } from "../_home/issueTable";
import { LectureEvaluationTable } from "../_home/lectureEvaluationTable";
export function MultipurposePanel() {
  return (
    <div className="hidden xl:block">
      <div className="flex max-w-sm flex-col gap-2 px-2 py-4">
        <TimeWidget />
        <div className=" flex items-center justify-between ">
          <Search placeholder="전체 게시판의 글을 검색하세요!" />
        </div>
        <IssueTable />
        <LectureEvaluationTable />
      </div>
    </div>
  );
}
