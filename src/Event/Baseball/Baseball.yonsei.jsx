/**
 * 종목 - 야구 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */

import "./Baseball.css";
import anime from "animejs";
import { useState } from "react";

export function BaseballYonsei({ goNextEvent }) {
  const [gameStarted, setGameStarted] = useState(false);

  // 고대/연대 버튼 누르면 야바위 게임 시작
  const handleButtonClick = () => {
    if (!gameStarted) startGame();
  };

  // 야바위 게임 시작
  const startGame = () => {
    setGameStarted(true);

    // 컵 등장, 0.3초 후 섞는 애니메이션 시작
    // TODO: easing 변경
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

    // 대학 로고 사라짐
    setTimeout(() => {
      var buttons = document.getElementsByClassName(
        "baseball-button-container"
      );
      for (const button of buttons) {
        button.style.opacity = 0;
      }
    }, 1000);
  };

  // 야바위 애니메이션
  const yabaweeAnimation = () => {
    // 왼쪽 컵
    anime({
      targets: ".baseball-left.baseball-cup",
      left: "75%",
      direction: "alternate",
      loop: 12,
      easing: "easeInOutSine",
      duration: 200,
    });

    // 오른쪽 컵
    anime({
      targets: ".baseball-right.baseball-cup",
      right: "75%",
      direction: "alternate",
      loop: 12,
      easing: "easeInOutSine",
      duration: 200,
    });
    // 왔다갔다 12번

    setTimeout(() => {
      // 섞는 애니메이션 끝나면 고대 -> 연세 이미지 변경하고 컵 뒤에 띄워놓기
      var koreaLogo = document.getElementById("baseball-korea-logo");
      koreaLogo.src = "images/yonsei_logo.svg";
      var buttons = document.getElementsByClassName(
        "baseball-button-container"
      );
      for (const button of buttons) {
        button.style.opacity = 1;
      }

      // 컵에 클릭 리스너 등록
      var leftCup = document.querySelectorAll(".baseball-left.baseball-cup");
      var rightCup = document.querySelectorAll(".baseball-right.baseball-cup");
      leftCup[0].addEventListener("click", () => handleCupClick("left"));
      rightCup[0].addEventListener("click", () => handleCupClick("right"));
    }, 12 * 200 + 500);
  };

  // 선택한 컵 먼저 공개, 1.5초 뒤 다른쪽 컵도 공개, 1초 뒤 연세대 승리!
  const handleCupClick = (which) => {
    if (which == "left") {
      // 왼쪽 컵 선택
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
                setTimeout(handleYonseiVictory, 1000);
              },
            });
          }, 1000);
        },
      });
    } else {
      // 오른쪽 컵 선택
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
                setTimeout(handleYonseiVictory, 1000);
              },
            });
          }, 1000);
        },
      });
    }
  };

  // 게임 종료 후 호랑이 축소 & 독수리 확대 & 배경색 변경
  const handleYonseiVictory = () => {
    // 빨간색 배경 없애기
    anime({
      targets: ".baseball-page-wrapper",
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
      targets: ".baseball-page-background",
      opacity: 1,
      duration: 1200,
      easing: "easeOutExpo",
    });

    //독수리
    anime({
      targets: ".baseball-eagle-image",
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
      targets: ".baseball-tiger-image",
      width: "0",
      height: "0",
      bottom: "45%",
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".baseball-ball-image",
      top: "80%",
      left: "25%",
      duration: 1200,
      easing: "easeOutExpo",
    });

    // anime({
    //   targets: ".baseball-prompt-text",
    //   duration: 500,
    //   easing: "easeOutExpo",
    //   fontSize: "45px",
    // });

    // anime({
    //   targets: ".prompt-text",
    //   duration: 500,
    //   easing: "easeOutExpo",
    //   opacity: 0,
    // });

    // anime({
    //   targets: ".result-text",
    //   duration: 1300,
    //   easing: "easeOutExpo",
    //   opacity: 1,
    // });

    // prompt-text의 텍스트를 '연세대 승리'로 변경
    // var firstText = document.querySelector(".baseball-prompt-text.first");
    // var secondText = document.querySelector(".baseball-prompt-text.second");
    // firstText.innerHTML = "&apos;연세대&apos;";
    // secondText.innerHTML = "승리";

    anime({
      targets: ".baseball-prompt-text",
      duration: 1200,
      easing: "easeOutExpo",
      opacity: 0,
    });

    anime({
      targets: ".baseball-result-image",
      duration: 1200,
      easing: "easeOutExpo",
      opacity: 1,
    });

    anime({
      targets: ".baseball-result-image-container",
      duration: 1200,
      easing: "easeOutExpo",
      bottom: "40%",
    });

    anime({
      targets: ".baseball-cup",
      duration: 500,
      easing: "easeOutExpo",
      width: 0,
      height: 0,
      opacity: 0,
      complete: () => {
        const cups = document.getElementsByClassName(".baseball-cup");
        for (const cup of cups) {
          cup.style.display = "none";
        }
      },
    });
  };

  return (
    <div className="baseball-page-wrapper">
      <div className="baseball-page-background">
        <h5 className="baseball-headertext-round">Round 1</h5>
        <h3 className="baseball-headertext-event">야구</h3>
        <div className="baseball-result-image-container">
          <img
            className="baseball-result-image"
            src="images/congratulation.svg"
            alt="승리 이미지"
          />
        </div>
        <div className="baseball-yonsei-result-container">
          <h4 className="baseball-result-text">&apos;연세대&apos;</h4>
          <h4 className="baseball-result-text">승리</h4>
        </div>
      </div>
      <div className="baseball-header-container">
        <h5 className="baseball-headertext-round">Round 1</h5>
        <h3 className="baseball-headertext-event">야구</h3>
        <div className="baseball-prompt-container">
          <h1 className="baseball-prompt-text baseball-first">
            이길 것 같은 팀을
          </h1>
          <h1 className="baseball-prompt-text baseball-second">선택해주세요</h1>
        </div>
      </div>
      <div className="baseball-body-container">
        <img
          className="baseball-character-image baseball-tiger-image"
          src="images/tiger-character.svg"
          alt="호랑이 캐릭터"
        />
        <img
          className="baseball-character-image baseball-eagle-image"
          src="images/eagle-character.svg"
          alt="독수리 캐릭터"
        />
        <img
          className="baseball-ball-image"
          src="images/baseball-ball.svg"
          alt="야구공"
        />
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
