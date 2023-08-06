import "./result.css";

/**
 * 이벤트 결과 페이지입니다.
 * 이벤트 결과를 확인하고 (총 참여자 수) 카카오톡 공유하기를 할 수 있습니다.
 * 이 때 카카오톡 공유하기를 통해 이동하는 페이지는 랜딩 페이지에서 선택한 대학교에 따라 달라집니다.
 * @author 현웅
 */
export function Result({ univ, selectedUniv }) {
  return (
    <div className="page-container">
      <span className="result__title">결과 페이지</span>

      <span className="result__content">{`어차피 우승은 ${univ}!`}</span>

      <div className="result__shareBtn">{`친구에게 ${selectedUniv} 응원시키기`}</div>
    </div>
  );
}
