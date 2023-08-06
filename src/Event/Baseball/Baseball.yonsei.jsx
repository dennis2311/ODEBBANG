/**
 * 종목 - 야구 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */

import "./Baseball.css";
import anime from 'animejs';

export function BaseballYonsei({ goNextEvent }) {

  const handleKoreaClick = () => {
    console.log("고대 클릭");
  };

  const handleYonseiClick = () => {
    anime({
      targets: '.page-wrapper',
      backgroundPosition: '150% 300%',
      duration: 1500,
      easing: 'easeOutExpo',
      complete: () => {
        setTimeout(() => {
          goNextEvent();
        }, 3500);
      },
    });
  };

  return (
    <div className="page-wrapper">
      <div className="header-container">
        <h5 className="headertext-round">Round 2</h5>
        <h3 className="headertext-event">야구</h3>
        <div className="prompt-container">
          <h1 className="prompt-text">이길 것 같은 팀을</h1>
          <h1 className="prompt-text">선택해주세요</h1>
        </div>
      </div>
      <div className="body-container">
        <img className="character-image tiger-image" src="images/tiger-character.svg" alt="호랑이 캐릭터" />
        <img className="character-image eagle-image" src="images/eagle-character.svg" alt="독수리 캐릭터" />
        <img className="ball-image" src="images/baseball-ball.svg" alt="야구공" />
      </div>
      <div className="buttons-container">
        <div className="button-container">
          <div id="korea" className="univ-button" onClick={handleKoreaClick}>
            <img src="images/korea_logo.svg" alt="고대" />
          </div>
        </div>
        <img className="versus-icon" src="images/lightning.png" alt="아이콘" />
        <div className="button-container">
          <div id="yonsei" className="univ-button" onClick={handleYonseiClick}>
            <img src="images/yonsei_logo.svg" alt="연대" />
          </div>
        </div>
      </div>
    </div>
  );
}
