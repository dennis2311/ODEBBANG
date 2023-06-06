/**
 * 종목 - 야구 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */
export function BaseballYonsei({ goNextEvent }) {
  console.log("유한 수정함");
  return (
    <>
      <h1 className="event__title">야구</h1>

      <div className="event__btnRow">
        <button id="korea">고대</button>
        <button id="yonsei" onClick={goNextEvent}>
          연대
        </button>
      </div>
    </>
  );
}
