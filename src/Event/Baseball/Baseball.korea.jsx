/**
 * 종목 - 야구 응원 화면 (고려대학교 강제 응원)
 * @author 현웅
 */

import "./Baseball.css";
import anime from 'animejs';

export function BaseballKorea({ goNextEvent }) {
  const handleKoreaClick = () => {
    anime({
      targets: '.page-wrapper',
      backgroundSize: '200%',
      backgroundPosition: '10% 10%',
      duration: 1200,
      easing: 'easeOutExpo',
      complete: () => {
        setTimeout(()=> {
         goNextEvent();
       }, 300);
      },
    });
    anime({
      targets: '.tiger-image',
      width: '240px',
      height: '330px',
      bottom: '45%',
      duration: 1200,
      left:'77',
      easing: 'easeOutExpo',
    });
    anime({
      targets: '.eagle-image',
      width: '0',
      height: '0',
      bottom: '45%',
      duration: 1200,
      easing: 'easeOutExpo',
    });
    anime({
      targets: '.ball-image',
      top: '80%',
      left: '75%',
      duration: 1200,
      easing: 'easeOutExpo',
    });
    anime({
      targets: '.prompt-text',
      duration: 500,
      easing: 'easeOutExpo',
      opacity: 0,
    })
    anime({
      targets: '.result-text',
      duration: 1300,
      easing: 'easeOutExpo',
      opacity: 100,
    })
    anime({
      targets: '.result-image',
      duration: 1200,
      easing: 'easeOutExpo',
      opacity: 100,
    })
    anime({
      targets: '.resultimage-container',
      duration: 1200,
      easing: 'easeOutExpo',
      bottom: '40%',
    })
  };

  const handleYonseiClick = () => {
    console.log("연대 클릭");
  }
  
  return (
    <div className="page-wrapper">
      <div className="header-container">
        <h3 className="headertext-round">Round2</h3>
        <h2 className="headertext-event">야구</h2>
        <div className="resultimage-container">
         <img className="result-image" src="images/congratulation.svg" alt="승리 이미지"></img>
        </div>
        <div className="prompt-container">
          <h1 className="prompt-text">이길 것 같은 팀을</h1>
          <h1 className="prompt-text">선택해주세요</h1>
        </div>
        <div className="result-container">
          <h4 className="result-text">'고려대'</h4>
          <h4 className="result-text">승리</h4>
        </div>
      </div>
      <div className="body-container">
        <img className="character-image tiger-image" src="images/tiger-character.svg" alt="호랑이 캐릭터"></img>
        <img className="character-image eagle-image" src="images/eagle-character.svg" alt="독수리 캐릭터"></img>
        <img className="ball-image" src="images/baseball-ball.svg" alt="야구공"></img>
      </div>
      <div className="buttons-container">
        <div className="button-container">
         <div id="korea" className="univ-button" onClick={handleKoreaClick}>
           <img src="images/korea_logo.svg" alt="고대" />
          </div>
        </div>
        <img className="versus" src="images/lightning.png" alt="아이콘" />
        <div className="button-container">
          <div id="yonsei" className="univ-button" onClick={handleYonseiClick}>
            <img src="images/yonsei_logo.svg" alt="연대" />
          </div>
        </div>
      </div>
    </div>
  );
}