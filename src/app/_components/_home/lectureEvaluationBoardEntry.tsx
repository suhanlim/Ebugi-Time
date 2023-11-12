export default function LectureEvaluationBoardEntry() {
  return (
    <>
      <div className="rating rating-xs">
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <br />
      <span className="font-bold">소셜미디어작품발표 : 전완식</span>
      <br />
      <span className="text-center text-xs ">
        교수님 수업 듣고 정신병 왔어요 교수님 능력이 있으신 건 알겠는데 꼭
        그렇게까지 하셨어야 했나 3학년 수업까지 오셨으면 대충은 알 거예요
      </span>
    </>
  );
}
