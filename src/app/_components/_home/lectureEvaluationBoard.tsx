import BoardEntry from "./lectureEvaluationBoardEntry";
export default function LectureEvaluationBoard() {
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
              <BoardEntry />
            </td>
          </tr>
          <tr>
            <td>
              <BoardEntry />
            </td>
          </tr>
          <tr>
            <td>
              <BoardEntry />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
