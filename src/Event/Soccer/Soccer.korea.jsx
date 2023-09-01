import React, { useState } from 'react';
import anime from 'animejs';
import "./soccer_korea.css"

export function SoccerKorea({ goNextEvent }) {

  const [isClicked, setIsClicked] = useState(false)

  const handleYonseiClick = () => {
    setIsClicked(true);
  };

  const KoreaVictory = () => {
    anime({
      targets: ".page-wrapper-soccer",
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
      targets: '.tiger-image-soccer',
      width: '240px',
      height: '330px',
      bottom: '45%',
      duration: 1200,
      left: '77',
      easing: 'easeOutExpo',
    });
    anime({
      targets: '.eagle-image-soccer',
      width: '0',
      height: '0',
      bottom: '45%',
      duration: 1200,
      easing: 'easeOutExpo',
    });
    anime({
      targets: '.ball-image-soccer',
      top: '80%',
      right: '75%',
      duration: 1200,
      easing: 'easeOutExpo',
    });
    anime({
      targets: '.prompt-text-soccer',
      duration: 500,
      easing: 'easeOutExpo',
      opacity: 0,
    })
    anime({
      targets: '.result-text-soccer',
      duration: 1300,
      easing: 'easeOutExpo',
      opacity: 100,
    })
    anime({
      targets: '.result-image-soccer',
      duration: 1200,
      easing: 'easeOutExpo',
      opacity: 100,
    })
    anime({
      targets: '.resultimage-container-soccer',
      duration: 1200,
      easing: 'easeOutExpo',
      bottom: '40%',
    })
  };

  return (
    <div className="page-wrapper-soccer">
      <div className="page-background-soccer">
        <h5 className="headertext-round-soccer">Round 2</h5>
        <h3 className="headertext-event-soccer">축구</h3>
      </div>
      <div className="header-container-soccer">
        <h5 className="headertext-round-soccer">Round 2</h5>
        <h3 className="headertext-event-soccer">축구</h3>
        <div className="resultimage-container-soccer">
          <img className="result-image-soccer" src="images/congratulation.svg" alt="승리 이미지"></img>
        </div>
        <div className="prompt-container-soccer">
          <h1 className="prompt-text-soccer">이길 것 같은 팀을</h1>
          <h1 className="prompt-text-soccer">선택해주세요</h1>
        </div>
        <div className="result-container-soccer">
          <h4 className="result-text-soccer">&apos;고려대&apos;</h4>
          <h4 className="result-text-soccer">승리</h4>
        </div>
      </div>
      <div className="body-container-soccer">
        <img className="character-image-soccer tiger-image-soccer" src="images/tiger-character.svg" alt="호랑이 캐릭터" />
        <img className="character-image-soccer eagle-image-soccer" src="images/eagle-character.svg" alt="독수리 캐릭터" />
        <img className="ball-image-soccer" src="images/soccerball-image.png" alt="축구공"/>
      </div>
      <div className="buttons-container-soccer">
        <div className="button-container-soccer korea">
          <div id="korea" className="univ-button-soccer" onClick={KoreaVictory}>
            <img id="korea-logo" src="images/korea_logo.svg" alt="고대" />
          </div>
        </div>
        <div className="button-container-soccer yonsei">
          <div id="yonsei" className={`univ-button-soccer ${isClicked ? "clicked-button2" : ""}`} onClick={handleYonseiClick}>
            <img id="yonsei-logo" src="images/yonsei_logo.svg" alt="연대" />
          </div>
        </div>
        <img className="lightning-icon-soccer" src="images/lightning.png" alt="아이콘" />
      </div>
    </div>
  );
}