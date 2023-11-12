import StarIcon from "@mui/icons-material/Star";
export function LectureEvaluationTableEntry() {
  return (
    <>
      <div className="flex flex-row py-1">
        <StarIcon fontSize="small" sx={{ color: "orange" }} />
        <StarIcon fontSize="small" sx={{ color: "orange" }} />
        <StarIcon fontSize="small" sx={{ color: "orange" }} />
        <StarIcon fontSize="small" sx={{ color: "orange" }} />
        <StarIcon fontSize="small" sx={{ color: "orange" }} />
      </div>
      <span className="font-bold">소셜미디어작품발표 : 전완식</span>
      <br />
      <span className="text-center text-xs ">
        교수님 수업 듣고 정신병 왔어요 교수님 능력이 있으신 건 알겠는데 꼭
        그렇게까지 하셨어야 했나 3학년 수업까지 오셨으면 대충은 알 거예요
      </span>
    </>
  );
}
