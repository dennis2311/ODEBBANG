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
      targets: ".baseball-cup",
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
      var buttons = document.getElementsByClassName(
        "baseball-button-container"
      );
      for (const button of buttons) {
        button.style.opacity = 0;
      }
    }, 1000);
  };

  const yabaweeAnimation = () => {
    anime({
      targets: ".baseball-left.baseball-cup",
      left: "75%",
      direction: "alternate",
      loop: 12,
      easing: "easeInOutSine",
      duration: 200,
    });

    anime({
      targets: ".baseball-right.baseball-cup",
      right: "75%",
      direction: "alternate",
      loop: 12,
      easing: "easeInOutSine",
      duration: 200,
    });

    setTimeout(() => {
      var yonseiLogo = document.getElementById("baseball-yonsei-logo");
      yonseiLogo.src = "images/korea_logo.svg";
      var buttons = document.getElementsByClassName(
        "baseball-button-container"
      );
      for (const button of buttons) {
        button.style.opacity = 1;
      }

      var leftCup = document.querySelectorAll(".baseball-left.baseball-cup");
      var rightCup = document.querySelectorAll(".baseball-right.baseball-cup");
      leftCup[0].addEventListener("click", () => handleCupClick("left"));
      rightCup[0].addEventListener("click", () => handleCupClick("right"));
    }, 12 * 200 + 500);
  };

  const handleCupClick = (which) => {
    if (which == "left") {
      anime({
        targets: ".baseball-left.baseball-cup",
        top: "-30%",
        easing: "easeOutExpo",
        duration: 500,
        complete: () => {
          setTimeout(() => {
            anime({
              targets: ".baseball-right.baseball-cup",
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
        targets: ".baseball-right.baseball-cup",
        top: "-30%",
        easing: "easeOutExpo",
        duration: 500,
        complete: () => {
          setTimeout(() => {
            anime({
              targets: ".baseball-left.baseball-cup",
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

  //const handleKoreaPage = () => {
  //anime({
  //targets: ".page-wrapper",
  //backgroundSize: "350%",
  //   backgroundPosition: "40% 30%",
  // duration: 500,
  //easing: "easeOutExpo",
  //complete: () => {
  //  setTimeout(() => {
  //    goNextEvent();
  // }, 1500);
  //},
  // });
  //};

  const handleKoreaVictory = () => {
    anime({
      targets: ".baseball-page-wrapper",
      backgroundSize: "500%",
      backgroundPosition: "50% 30%",
      duration: 100,
      easing: "easeOutExpo",
      complete: () => {
        setTimeout(() => {
          goNextEvent();
        }, 1500);
      },
    });
    anime({
      targets: ".baseball-tiger-image",
      width: "240px",
      height: "330px",
      bottom: "45%",
      duration: 1200,
      left: "77",
      easing: "easeOutExpo",
    });
    anime({
      targets: ".baseball-eagle-image",
      width: "0",
      height: "0",
      bottom: "45%",
      duration: 1200,
      easing: "easeOutExpo",
    });
    anime({
      targets: ".baseball-ball-image",
      top: "80%",
      left: "75%",
      duration: 1200,
      easing: "easeOutExpo",
    });

    // anime({
    //   targets: ".baseball-prompt-text",
    //   duration: 500,
    //   easing: "easeOutExpo",
    //   fontSize: "45px",
    // });

    anime({
      targets: ".baseball-prompt-text",
      duration: 500,
      easing: "easeOutExpo",
      opacity: 0,
    });
    // anime({
    //   targets: ".result-text",
    //   duration: 1300,
    //   easing: "easeOutExpo",
    //   opacity: 100,
    // });

    // prompt-text의 텍스트를 '고려대 승리'로 변경
    // var firstText = document.querySelector(
    //   ".baseball-prompt-text.baseball-first"
    // );
    // var secondText = document.querySelector(
    //   ".baseball-prompt-text.baseball-second"
    // );
    // firstText.innerHTML = "&apos;고려대&apos;";
    // secondText.innerHTML = "승리";

    anime({
      targets: ".baseball-korea-result-container",
      duration: 1200,
      easing: "easeOutExpo",
      opacity: 1,
    });
    anime({
      targets: ".baseball-result-image",
      duration: 1200,
      easing: "easeOutExpo",
      opacity: 100,
    });
    anime({
      targets: ".baseball-result-image-container",
      duration: 1200,
      easing: "easeOutExpo",
      bottom: "40%",
    });
    anime({
      targets: ".baseball-left.baseball-cup",
      duration: 500,
      easing: "easeOutExpo",
      width: 0,
      height: 0,
      opacity: 0,
      complete: () => {
        const leftCup = document.querySelector(".baseball-left.baseball-cup");
        leftCup.style.display = "none";
      },
    });
    anime({
      targets: ".baseball-right.baseball-cup",
      duration: 500,
      easing: "easeOutExpo",
      width: 0,
      height: 0,
      opacity: 0,
      complete: () => {
        const rightCup = document.querySelector(".baseball-right.baseball-cup");
        rightCup.style.display = "none";
      },
    });
  };

  return (
    <div className="baseball-page-wrapper">
      <div className="baseball-header-container">
        <h3 className="baseball-headertext-round">Round 1</h3>
        <h2 className="baseball-headertext-event">야구</h2>
        <div className="baseball-result-image-container">
          <img
            className="baseball-result-image"
            src="images/congratulation.svg"
            alt="승리 이미지"
          ></img>
        </div>
        <div className="baseball-prompt-container">
          <h1 className="baseball-prompt-text baseball-first">
            이길 것 같은 팀을
          </h1>
          <h1 className="baseball-prompt-text baseball-second">선택해주세요</h1>
        </div>
        <div className="baseball-korea-result-container">
          <h4 className="baseball-result-text">&apos;고려대&apos;</h4>
          <h4 className="baseball-result-text">승리</h4>
        </div>
      </div>
      <div className="baseball-body-container">
        <img
          className="baseball-character-image baseball-tiger-image"
          src="images/tiger-character.svg"
          alt="호랑이 캐릭터"
        ></img>
        <img
          className="baseball-character-image baseball-eagle-image"
          src="images/eagle-character.svg"
          alt="독수리 캐릭터"
        ></img>
        <img
          className="baseball-ball-image"
          src="images/baseball-ball.svg"
          alt="야구공"
        ></img>
      </div>
      <div className="baseball-buttons-container">
        <div className="baseball-button-container baseball-korea">
          <div
            id="baseball-korea"
            className="baseball-univ-button"
            onClick={handleButtonClick}
          >
            <img
              id="baseball-korea-logo"
              src="images/korea_logo.svg"
              alt="고대"
            />
          </div>
        </div>
        <div className="baseball-button-container baseball-yonsei">
          <div
            id="baseball-yonsei"
            className="baseball-univ-button"
            onClick={handleButtonClick}
          >
            <img
              id="baseball-yonsei-logo"
              src="images/yonsei_logo.svg"
              alt="연대"
            />
          </div>
        </div>
        <img
          className="baseball-cup baseball-left"
          src="images/yabawee_cup.svg"
        />
        <img
          className="baseball-cup baseball-right"
          src="images/yabawee_cup.svg"
        />
        <img
          className="baseball-lightning-icon"
          src="images/lightning.png"
          alt="아이콘"
        />
      </div>
    </div>
  );
}
