/**
 * 종목 - 농구 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */

import React, { useState } from "react";
import anime from 'animejs';
import './Basketball.yonsei.css';


export function BasketballYonsei({ goNextEvent }) {
  const [isClicked, setClicked] = useState(false);

  const handleKoreaClick = () => {
    setClicked(true);
  };



  const handleYonseiClick = () => { // Baseball Yonsei 참고

    // 빨간색 배경 없애기
    anime({
      targets: ".basketball-page-wrapper",
      backgroundPosition: "150% 300%",
      duration: 1200,
      easing: "easeOutExpo",
      complete: () => {
        setTimeout(() => {
          goNextEvent();
        }, 300);
      },
    });

    // 파란색 그라데이션 배경 추가
    anime({
      targets: ".basketball-page-background",
      opacity: 1,
      duration: 1200,
      easing: "easeOutExpo",
    });

    //독수리
    anime({
      targets: ".basketball-eagle-image",
      width: "240px",
      height: "330px",
      bottom: "45%",
      right: "50%",
      translateX: "50%",
      translateY: "50%",
      duration: 1200,
      easing: "easeOutExpo",
    });

    //호랑이
    anime({
      targets: ".basketball-tiger-image",
      width: "0",
      height: "0",
      bottom: "45%",
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".basketball-ball-image",
      top: "80%",
      left: "25%",
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".basketball-prompt-text",
      duration: 1200,
      easing: "easeOutExpo",
      opacity: 0,
    });

    anime({
      targets: ".basketball-result-image",
      duration: 1200,
      easing: "easeOutExpo",
      opacity: 1,
    });

    anime({
      targets: ".basketball-result-image-container",
      duration: 1200,
      easing: "easeOutExpo",
      bottom: "40%",
    });
  };


  return (
    <>
      <div className="basketball-page-wrapper">
        <div className="basketball-page-background">
          <h5 className="basketball-headertext-round">Round 2</h5>
          <h3 className="basketball-headertext-event">농구</h3>
          <div className="basketball-result-image-container">
            <img
              className="basketball-result-image" 
              src="images/congratulation.svg" 
              alt="승리 이미지"
            />
          </div>
          <div className="basketball-yonsei-result-container">
            <h4 className="basketball-result-text">&apos;연세대&apos;</h4>
            <h4 className="basketball-result-text">승리</h4>
          </div>
        </div>
        <div className="basketball-header-container">
          <h5 className="basketball-headertext-round">Round 2</h5>
          <h3 className="basketball-headertext-event">농구</h3>
          <div className="basketball-prompt-container">
            <h1 className="basketball-prompt-text basketball-first">
              이길 것 같은 팀을
            </h1>
            <h1 className="basketball-prompt-text basketball-second">선택해주세요</h1>
          </div>
        </div>
        <div className="basketball-body-container">
          <img 
            className="basketball-character-image basketball-tiger-image" 
            src="images/tiger-character.svg" alt="호랑이 캐릭터" 
          />
          <img 
            className="basketball-character-image basketball-eagle-image" 
            src="images/eagle-character.svg" alt="독수리 캐릭터" 
          />
          <img 
            className="basketball-ball-image" 
            src="images/basketball-ball.svg" 
            alt="농구공" 
          />
        </div>
        <div className="basketball-buttons-container">
          <div className="basketball-button-container basketball-korea">
            <div id="basketball-btn1" className={`basketball-univ-button ${isClicked ? 'flipK' : ''}`} onClick={handleKoreaClick}>
              <img id="basketball-korea-logo" src="images/korea_logo.svg" alt="고대" />
            </div>
            {isClicked && (<div id="basketball-btn2" className={`basketball-univ-button ${isClicked ? 'flipY' : ''}`} onClick={handleYonseiClick}><img src="images/yonsei_logo.svg" alt="연대" /></div>)}
          </div>
          <div className="basketball-button-container basketball-yonsei">
            <div id="basketball-yonsei" className="basketball-univ-button" onClick={handleYonseiClick}>
              <img id="basketball-yonsei-logo" src="images/yonsei_logo.svg" alt="연대" />
            </div>
          </div>
          <img className="basketball-lightning-icon" src="images/lightning.png" alt="아이콘" />
        </div>
      </div>
    </>
  );
};