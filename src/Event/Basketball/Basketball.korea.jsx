import React, { useState } from 'react';
import anime from 'animejs';
import "./Basketball.korea.css"

export function BasketballKorea({ goNextEvent }) {
  
  const [isClicked, setIsClicked] = useState(false)

  const handleYonseiClick = () => {
    setIsClicked(true);
  };

  const KoreaVictory = () => {
    anime({
      targets: ".page-wrapper-basketball",
      backgroundSize: "200%",
      backgroundPosition: "10% 10%",
      duration: 1200,
      easing: "easeOutExpo",
      complete: () => {
        setTimeout(() => {
          goNextEvent();
        }, 300);
      },
    });
    anime({
      targets: '.tiger-image-basketball',
      width: '240px',
      height: '330px',
      bottom: '45%',
      duration: 1200,
      left: '77',
      easing: 'easeOutExpo',
    });
    anime({
      targets: '.eagle-image-basketball',
      width: '0',
      height: '0',
      bottom: '45%',
      duration: 1200,
      easing: 'easeOutExpo',
    });
    anime({
      targets: '.ball-image-basketball',
      top: '80%',
      right: '75%',
      duration: 1200,
      easing: 'easeOutExpo',
    });
    anime({
      targets: '.prompt-text-basketball',
      duration: 500,
      easing: 'easeOutExpo',
      opacity: 0,
    })
    anime({
      targets: '.result-text-basketball',
      duration: 1300,
      easing: 'easeOutExpo',
      opacity: 100,
    })
    anime({
      targets: '.result-image-basketball',
      duration: 1200,
      easing: 'easeOutExpo',
      opacity: 100,
    })
    anime({
      targets: '.resultimage-container-basketball',
      duration: 1200,
      easing: 'easeOutExpo',
      bottom: '40%',
    })
  };

  return (
    <div className="page-wrapper-basketball">
      <div className="page-background-basketball">
        <h5 className="headertext-round-basketball">Round 2</h5>
        <h3 className="headertext-event-basketball">농구</h3>
      </div>
      <div className="header-container-basketball">
        <h5 className="headertext-round-basketball">Round 2</h5>
        <h3 className="headertext-event-basketball">농구</h3>
        <div className="resultimage-container-basketball">
          <img className="result-image-basketball" src="images/congratulation.svg" alt="승리 이미지"></img>
        </div>
        <div className="prompt-container-basketball">
          <h1 className="prompt-text-basketball">이길 것 같은 팀을</h1>
          <h1 className="prompt-text-basketball">선택해주세요</h1>
        </div>
        <div className="result-container-basketball">
          <h4 className="result-text-basketball">&apos;고려대&apos;</h4>
          <h4 className="result-text-basketball">승리</h4>
        </div>
      </div>
      <div className="body-container-basketball">
        <img className="character-image-basketball tiger-image-basketball" src="images/tiger-character.svg" alt="호랑이 캐릭터" />
        <img className="character-image-basketball eagle-image-basketball" src="images/eagle-character.svg" alt="독수리 캐릭터" />
        <img className="ball-image-basketball" src="images/basketball-image.png" alt="농구공"/>
      </div>
      <div className="buttons-container-basketball">
        <div className="button-container-basketball korea">
          <div id="korea" className="univ-button-basketball" onClick={KoreaVictory}>
            <img id="korea-logo" src="images/korea_logo.svg" alt="고대" />
          </div>
        </div>
        <div className="button-container-basketball yonsei">
          <div id="yonsei" className={`univ-button-basketball ${isClicked ? "clicked-button" : ""}`} onClick={handleYonseiClick}>
            <img id="yonsei-logo" src="images/yonsei_logo.svg" alt="연대" />
          </div>
        </div>
        <img className="lightning-icon-basketball" src="images/lightning.png" alt="아이콘" />
      </div>
    </div>
  );
}
