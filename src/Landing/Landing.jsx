import "./landing.css";

/**
 * 이벤트 홈페이지 랜딩 페이지입니다.
 * 본인이 응원하고 싶은 대학을 고릅니다. 결과에는 반영되지 않지만,
 * 결과 페이지에서 카카오톡 공유하기 기능을 사용할 때, 공유하는 URL 에 반영됩니다.
 * @author 현웅
 */
export function Landing({ goNextPage, setSelectedUniv }) {
  function onSelectKorea() {
    setSelectedUniv("KOREA");
    goNextPage();
  }

  function onSelectYonsei() {
    setSelectedUniv("YONSEI");
    goNextPage();
  }

  return (
    <div className="landing container">
      <span className="landing__title">랜딩 페이지</span>

      <span className="landing__content">응원할 대학 선택하기</span>

      <div className="row">
        <button onClick={onSelectKorea}>고려대</button>
        <button onClick={onSelectYonsei}>연세대</button>
      </div>
    </div>
  );
}
