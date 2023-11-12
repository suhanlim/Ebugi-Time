import Search from "./search";
import { TimeWidget } from "./timeWidget";
import { IssueTable } from "./issueTable";
import { LectureEvaluationTable } from "./lectureEvaluationTable";
export function MultipurposePanel() {
  return (
    <div className=" flex max-w-sm flex-col gap-2 px-2 py-4">
      <TimeWidget />
      <div className=" flex items-center justify-between ">
        <Search placeholder="전체 게시판의 글을 검색하세요!" />
      </div>
      <IssueTable />
      <LectureEvaluationTable />
    </div>
  );
}
