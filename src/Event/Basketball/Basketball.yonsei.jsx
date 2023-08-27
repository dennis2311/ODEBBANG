/**
 * 종목 - 농구 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */

import React, { useRef, useState } from "react";
import anime from "animejs";
import "./Basketball.yonsei.css";

export function BasketballYonsei({ goNextEvent }) {
  const [isClicked, setClicked] = useState(false);

  const handleKoreaClick = () => {
    setClicked(true);
  };

  const handleYonseiClick = () => {
    // 빨간색 배경 없애기
    anime({
      targets: ".page-wrapper",
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
      targets: ".page-background",
      opacity: 1,
      duration: 1200,
      easing: "easeOutExpo",
    });

    //독수리
    anime({
      targets: ".eagle-image",
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
      targets: ".tiger-image",
      width: "0",
      height: "0",
      bottom: "45%",
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".ball-image",
      top: "70%",
      left: "15%",
      duration: 1200,
      scale: 1.2,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".prompt-text",
      duration: 500,
      easing: "easeOutExpo",
      opacity: 0,
    });

    anime({
      targets: ".result-text",
      duration: 1300,
      easing: "easeOutExpo",
      opacity: 1,
    });

    anime({
      targets: ".result-image",
      duration: 1200,
      easing: "easeOutExpo",
      opacity: 1,
    });

    anime({
      targets: ".resultimage-container",
      duration: 1200,
      easing: "easeOutExpo",
      bottom: "40%",
    });
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-background">
          <h5 className="headertext-round">Round 2</h5>
          <h3 className="headertext-event">농구</h3>
        </div>
        <div className="header-container">
          <h5 className="headertext-round">Round 2</h5>
          <h3 className="headertext-event">농구</h3>
          <div className="resultimage-container">
            <img
              className="result-image"
              src="src/Resource/congratulation.svg"
              alt="승리 이미지"
            ></img>
          </div>
          <div className="prompt-container">
            <h1 className="prompt-text">이길 것 같은 팀을</h1>
            <h1 className="prompt-text">선택해주세요</h1>
          </div>
          <div className="result-container">
            <h4 className="result-text">&apos;연세대&apos;</h4>
            <h4 className="result-text">승리</h4>
          </div>
        </div>
        <div className="body-container">
          <img
            className="character-image tiger-image"
            src="src/Resource/tiger-character.svg"
            alt="호랑이 캐릭터"
          />
          <img
            className="character-image eagle-image"
            src="src/Resource/eagle-character.svg"
            alt="독수리 캐릭터"
          />
          <img
            className="ball-image"
            src="src/Resource/basketball-ball.svg"
            alt="농구공"
          />
        </div>
        <div className="buttons-container">
          <div className="button-container korea">
            <div
              id="btn1"
              className={`univ-button ${isClicked ? "flipK" : ""}`}
              onClick={handleKoreaClick}
            >
              <img src="src/Resource/korea_logo.svg" alt="고대" />
            </div>
            {isClicked && (
              <div
                id="btn2"
                className={`univ-button ${isClicked ? "flipY" : ""}`}
                onClick={handleYonseiClick}
              >
                <img src="src/Resource/yonsei_logo.svg" alt="연대" />
              </div>
            )}
          </div>
          <div className="button-container yonsei">
            <div
              id="yonsei"
              className="univ-button"
              onClick={handleYonseiClick}
            >
              <img src="src/Resource/yonsei_logo.svg" alt="연대" />
            </div>
          </div>
          <img
            className="lightning-icon"
            src="src/Resource/lightning.png"
            alt="아이콘"
          />
        </div>
      </div>
    </>
  );
}
