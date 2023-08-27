/**
 * 종목 - 야구 응원 화면 (고려대학교 강제 응원)
 * @author 현웅
 */

import "./Baseball.css";
import anime from "animejs";
import { useState } from "react";

export function BaseballKorea({ goNextEvent }) {
  const [gameStarted, setGameStarted] = useState(false);

  const handleButtonClick = () => {
    if (!gameStarted) startGame();
  };

  const startGame = () => {
    setGameStarted(true);

    anime({
      targets: ".cup",
      top: "50%",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      complete: () => {
        setTimeout(() => {
          yabaweeAnimation();
        }, 300);
      },
    });

    setTimeout(() => {
      var buttons = document.getElementsByClassName("button-container");
      for (const button of buttons) {
        button.style.opacity = 0;
      }
    }, 1000);
  };

  const yabaweeAnimation = () => {
    anime({
      targets: ".left.cup",
      left: "75%",
      direction: "alternate",
      loop: 12,
      easing: "easeInOutSine",
      duration: 200,
    });

    anime({
      targets: ".right.cup",
      right: "75%",
      direction: "alternate",
      loop: 12,
      easing: "easeInOutSine",
      duration: 200,
    });

    setTimeout(() => {
      var yonseiLogo = document.getElementById("yonsei-logo");
      yonseiLogo.src = "images/korea_logo.svg";
      var buttons = document.getElementsByClassName("button-container");
      for (const button of buttons) {
        button.style.opacity = 1;
      }

      var leftCup = document.getElementsByClassName("left cup");
      var rightCup = document.getElementsByClassName("right cup");
      leftCup[0].addEventListener("click", () => handleCupClick("left"));
      rightCup[0].addEventListener("click", () => handleCupClick("right"));
    }, 12 * 200 + 500);
  };

  const handleCupClick = (which) => {
    if (which == "left") {
      anime({
        targets: ".left.cup",
        top: "-30%",
        easing: "easeOutExpo",
        duration: 500,
        complete: () => {
          setTimeout(() => {
            anime({
              targets: ".right.cup",
              top: "-30%",
              easing: "easeOutExpo",
              duration: 500,
              complete: () => {
                setTimeout(handleKoreaVictory, 1000);
              },
            });
          }, 1000);
        },
      });
    } else {
      anime({
        targets: ".right.cup",
        top: "-30%",
        easing: "easeOutExpo",
        duration: 500,
        complete: () => {
          setTimeout(() => {
            anime({
              targets: ".left.cup",
              top: "-30%",
              easing: "easeOutExpo",
              duration: 500,
              complete: () => {
                setTimeout(handleKoreaVictory, 1000);
              },
            });
          }, 1000);
        },
      });
    }
  };

  const handleKoreaVictory = () => {
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
      left: "75%",
      duration: 1200,
      easing: "easeOutExpo",
    });
    anime({
      targets: ".prompt-text",
      duration: 500,
      easing: "easeOutExpo",
      display: "none",
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
    anime({
      targets: ".left.cup",
      duration: 500,
      easing: "easeOutExpo",
      width: 0,
      height: 0,
      opacity: 0,
      complete: () => {
        const leftCup = document.querySelector(".left.cup");
        leftCup.style.display = "none";
      },
    });
    anime({
      targets: ".right.cup",
      duration: 500,
      easing: "easeOutExpo",
      width: 0,
      height: 0,
      opacity: 0,
      complete: () => {
        const rightCup = document.querySelector(".right.cup");
        rightCup.style.display = "none";
      },
    });
  };

  return (
    <div className="page-wrapper">
      <div className="header-container">
        <h3 className="headertext-round">Round1</h3>
        <h2 className="headertext-event">야구</h2>
        <div className="resultimage-container">
          <img
            className="result-image"
            src="images/congratulation.svg"
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
          src="images/tiger-character.svg"
          alt="호랑이 캐릭터"
        ></img>
        <img
          className="character-image eagle-image"
          src="images/eagle-character.svg"
          alt="독수리 캐릭터"
        ></img>
        <img
          className="ball-image"
          src="images/baseball-ball.svg"
          alt="야구공"
        ></img>
      </div>
      <div className="buttons-container">
        <div className="button-container korea">
          <div id="korea" className="univ-button" onClick={handleButtonClick}>
            <img id="korea-logo" src="images/korea_logo.svg" alt="고대" />
          </div>
        </div>
        <div className="button-container yonsei">
          <div id="yonsei" className="univ-button" onClick={handleButtonClick}>
            <img id="yonsei-logo" src="images/yonsei_logo.svg" alt="연대" />
          </div>
        </div>
        <img className="cup left" src="images/yabawee_cup.svg" />
        <img className="cup right" src="images/yabawee_cup.svg" />
        <img
          className="lightning-icon"
          src="images/lightning.png"
          alt="아이콘"
        />
      </div>
    </div>
  );
}
