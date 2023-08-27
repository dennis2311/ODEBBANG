/**
 * 종목 - 아이스하키 응원 화면 (고려대학교 강제 응원)
 * @author 현웅
 */
import { useEffect, useRef, useState } from "react";
import "./korea.css";
import anime from "animejs";

export function IceHockeyKorea({ goNextEvent }) {
  const [mouseX, setMouseX] = useState(500);
  const [mouseY, setMouseY] = useState(500);
  const origin = useRef();
  const move = useRef();

  useEffect(() => {
    document.addEventListener(
      "mousemove",
      function (e) {
        setMouseX(getRandom(0, 300));
        setMouseY(getRandom(0, 250));
        console.log(mouseX, mouseY);
        origin.current.style.display = "none";
      },
      false
    );
  }, []);

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const next = () => {
    move.current.style.display = "none";
    // 빨간색 배경 없애기
    anime({
      targets: ".page-wrapper",
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
      targets: ".tiger-image",
      width: "240px",
      height: "330px",
      bottom: "45%",
      duration: 1200,
      left: "77",
      easing: "easeOutExpo",
    });
    anime({
      targets: ".eagle-image",
      width: "0",
      height: "0",
      bottom: "45%",
      duration: 1200,
      easing: "easeOutExpo",
    });
    anime({
      targets: ".ball-image",
      top: "80%",
      right: "75%",
      duration: 1200,
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
      opacity: 100,
    });
    anime({
      targets: ".result-image",
      duration: 1200,
      easing: "easeOutExpo",
      opacity: 100,
    });
    anime({
      targets: ".resultimage-container",
      duration: 1200,
      easing: "easeOutExpo",
      bottom: "40%",
    });
  };

  return (
    <div className="page-wrapper">
      <div className="page-background">
        <h5 className="headertext-round">Round 5</h5>
        <h3 className="headertext-event">빙구</h3>
      </div>
      <div className="header-container">
        <h5 className="headertext-round">Round 5</h5>
        <h3 className="headertext-event">빙구</h3>
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
          <h4 className="result-text">&apos;고려대&apos;</h4>
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
        <img className="ball-image" src="src/Resource/puck.svg" alt="퍽" />
      </div>
      <div className="buttons-container">
        <div className="button-container korea">
          <div id="korea" className="univ-button" onClick={next}>
            <img id="korea-logo" src="src/Resource/korea_logo.svg" alt="고대" />
          </div>
        </div>
        <div className="button-container yonsei">
          <div ref={origin} id="yonsei">
            <img
              id="yonsei-logo"
              src="src/Resource/yonsei_logo.svg"
              alt="연대"
            />
          </div>
          <div
            ref={move}
            id="yonsei2"
            className="move"
            style={{ top: mouseY - 600 + "px", left: mouseX - 230 + "px" }}
          >
            <img
              id="yonsei-logo2"
              src="src/Resource/yonsei_logo.svg"
              alt="연대2"
            />
          </div>
        </div>
        <img
          className="lightning-icon"
          src="src/Resource/lightning.png"
          alt="아이콘"
        />
      </div>
    </div>
  );
}
