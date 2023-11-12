import { LectureEvaluationTableEntry } from "./lectureEvaluationTableEntry";
export function LectureEvaluationTable() {
  return (
    <div className="overflow-x-auto rounded-lg shadow-xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-blue-500">최근 강의평</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <LectureEvaluationTableEntry />
            </td>
          </tr>
          <tr>
            <td>
              <LectureEvaluationTableEntry />
            </td>
          </tr>
          <tr>
            <td>
              <LectureEvaluationTableEntry />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
