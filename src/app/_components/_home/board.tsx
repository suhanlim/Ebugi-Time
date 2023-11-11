export default function Board() {
  return (
    <div className="container">
      <section className="  border border-slate-400 bg-white/10 p-2">
        <h2>실시간 인기 글</h2>
        <article>
          <h3>트럼프 발언에 전세계 항공기가 위험</h3>
          <p>진단 10월 25일, 항공대란…</p>
          <footer>
            <span>댓글 133</span> <span>좋아요 18</span>
          </footer>
        </article>
        {/* More articles */}
      </section>

      <section>
        <h2>HOT 게시물</h2>
        {/* List hot posts */}
      </section>

      <section>
        <h2>BEST 게시물</h2>
        {/* List best posts */}
      </section>

      <section>
        <h2>최근 리뷰</h2>
        <div className="review">
          <div className="rating">★★★★</div>
          <h3>좋은 강연이었어요 : 박영</h3>
          <p>진단기법 배우고 왔어요. 항상 와보고 싶었던 강연이라</p>
        </div>
        {/* More reviews */}
      </section>
    </div>
  );
}
