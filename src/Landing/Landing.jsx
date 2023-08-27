import "./landing.css";

/**
 * 이벤트 홈페이지 랜딩 페이지입니다.
 * 본인이 응원하고 싶은 대학을 고릅니다. 결과에는 반영되지 않지만,
 * 결과 페이지에서 카카오톡 공유하기 기능을 사용할 때, 공유하는 URL 에 반영됩니다.
 * @author 현웅
 */
export function Landing({ goNextPage, univ, setSelectedUniv }) {
  function onSelectKorea() {
    setSelectedUniv("KOREA");
    goNextPage();
  }

  function onSelectYonsei() {
    setSelectedUniv("YONSEI");
    goNextPage();
  }

  return (
    <div className="landing_page_container">
      <div className="landing_title_image_container">
        <div className="landing_year_image_container">
          <img
            src="src/Resource/2023-image.png"
            alt="2023-image"
            className="landing_year_image"
          />
        </div>
        {univ === "KOREA" ? (
          <img
            className="landing_title_image"
            src="src/Resource/odebbang-title-korea-image.png"
            alt="odebbang-title-image"
          />
        ) : (
          <img
            className="landing_title_image"
            src="src/Resource/odebbang-title-yonsei-image.png"
            alt="odebbang-title-image"
          />
        )}
      </div>

      <span className="landing_event_description">정기전 승부 예측 이벤트</span>

      <div className="landing_character_images_container">
        <img
          className="landing_character_image"
          src="images/tiger-character.svg"
          alt="호랑이 캐릭터"
        ></img>
        <img
          className="landing_character_image"
          src="images/eagle-character.svg"
          alt="독수리 캐릭터"
        ></img>
      </div>

      <span className="landing_select_text">응원할 대학을 선택해주세요</span>

      <div className="landing_buttons_container">
        <div className="button-container korea">
          <div id="korea" className="univ-button" onClick={onSelectKorea}>
            <img id="korea-logo" src="images/korea_logo.svg" alt="고대" />
          </div>
        </div>
        <img
          className="lightning-icon"
          src="images/lightning.png"
          alt="아이콘"
        />
        <div className="button-container yonsei">
          <div id="yonsei" className="univ-button" onClick={onSelectYonsei}>
            <img id="yonsei-logo" src="images/yonsei_logo.svg" alt="연대" />
          </div>
        </div>
      </div>
    </div>
  );
}
