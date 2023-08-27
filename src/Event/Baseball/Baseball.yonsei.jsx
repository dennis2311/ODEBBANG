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

    // 대학 로고 사라짐
    setTimeout(() => {
      var buttons = document.getElementsByClassName("button-container");
      for (const button of buttons) {
        button.style.opacity = 0;
      }
    }, 1000);
  };

  // 야바위 애니메이션
  const yabaweeAnimation = () => {
    // 왼쪽 컵
    anime({
      targets: ".left.cup",
      left: "75%",
      direction: "alternate",
      loop: 12,
      easing: "easeInOutSine",
      duration: 200,
    });

    // 오른쪽 컵
    anime({
      targets: ".right.cup",
      right: "75%",
      direction: "alternate",
      loop: 12,
      easing: "easeInOutSine",
      duration: 200,
    });
    // 왔다갔다 12번

    setTimeout(() => {
      // 섞는 애니메이션 끝나면 고대 -> 연세 이미지 변경하고 컵 뒤에 띄워놓기
      var koreaLogo = document.getElementById("korea-logo");
      koreaLogo.src = "images/yonsei_logo.svg";
      var buttons = document.getElementsByClassName("button-container");
      for (const button of buttons) {
        button.style.opacity = 1;
      }

      // 컵에 클릭 리스너 등록
      var leftCup = document.getElementsByClassName("left cup");
      var rightCup = document.getElementsByClassName("right cup");
      leftCup[0].addEventListener("click", () => handleCupClick("left"));
      rightCup[0].addEventListener("click", () => handleCupClick("right"));
    }, 12 * 200 + 500);
  };

  // 선택한 컵 먼저 공개, 1.5초 뒤 다른쪽 컵도 공개, 1초 뒤 연세대 승리!
  const handleCupClick = (which) => {
    if (which == "left") {
      // 왼쪽 컵 선택
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
                setTimeout(handleYonseiVictory, 1000);
              },
            });
          }, 1000);
        },
      });
    } else {
      // 오른쪽 컵 선택
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
      top: "80%",
      left: "25%",
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".prompt-text",
      duration: 500,
      easing: "easeOutExpo",
      fontSize: "45px",
    });

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
    var firstText = document.querySelector(".prompt-text.first");
    var secondText = document.querySelector(".prompt-text.second");
    firstText.innerHTML = "&apos;연세대&apos;";
    secondText.innerHTML = "승리";

    anime({
      targets: ".result-image",
      duration: 1200,
      easing: "easeOutExpo",
      opacity: 1,
    });

    anime({
      targets: ".result-image-container",
      duration: 1200,
      easing: "easeOutExpo",
      bottom: "40%",
    });

    anime({
      targets: ".cup",
      duration: 500,
      easing: "easeOutExpo",
      width: 0,
      height: 0,
      opacity: 0,
      complete: () => {
        const cups = document.getElementsByClassName(".cup");
        for (const cup of cups) {
          cup.style.display = "none";
        }
      },
    });
  };

  return (
    <div className="page-wrapper">
      <div className="page-background">
        <h5 className="headertext-round">Round 1</h5>
        <h3 className="headertext-event">야구</h3>
      </div>
      <div className="header-container">
        <h5 className="headertext-round">Round 1</h5>
        <h3 className="headertext-event">야구</h3>
        <div className="result-image-container">
          <img
            className="result-image"
            src="images/congratulation.svg"
            alt="승리 이미지"
          />
        </div>
        <div className="prompt-container">
          <h1 className="prompt-text first">이길 것 같은 팀을</h1>
          <h1 className="prompt-text second">선택해주세요</h1>
        </div>
        <div className="result-container">
          <h4 className="result-text">&apos;연세대&apos;</h4>
          <h4 className="result-text">승리</h4>
        </div>
      </div>
      <div className="body-container">
        <img
          className="character-image tiger-image"
          src="images/tiger-character.svg"
          alt="호랑이 캐릭터"
        />
        <img
          className="character-image eagle-image"
          src="images/eagle-character.svg"
          alt="독수리 캐릭터"
        />
        <img
          className="ball-image"
          src="images/baseball-ball.svg"
          alt="야구공"
        />
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
