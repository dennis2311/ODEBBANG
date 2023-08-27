/**
 * 종목 - 럭비 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */

import { useRef, useState } from 'react';
import "./RugbyYonsei.css";
import anime from 'animejs';

export function RugbyYonsei({ goNextEvent }) {
  console.log("채원 수정");
  const promptContainerRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isAlternateText, setIsAlternateText] = useState(false);

  const handleYonseiVictory = () => {

    // 빨간색 배경 없애기
    anime({
      targets: '.page-wrapper-Yonsei',
      backgroundPosition: '150% 300%',
      duration: 1200,
      easing: 'easeOutExpo',
      complete: () => {
        setTimeout(() => {
          goNextEvent();
        }, 300);
      },
    });

    // 파란색 그라데이션 배경 추가
    anime({
      targets: '.page-backgrounds-Yonsei',
      opacity: 1,
      duration: 1200,
      easing: 'easeOutExpo',
    });

    //독수리
    anime({
      targets: '.eagle-image',
      width: '240px',
      height: '330px',
      bottom: '45%',
      right: '50%',
      translateX: '50%',
      translateY: '50%',
      duration: 1200,
      easing: 'easeOutExpo',
    });

    //호랑이
    anime({
      targets: '.tiger-image',
      width: '0',
      height: '0',
      bottom: '45%',
      duration: 1200,
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.ball-image-Yonsei',
      top: '80%',
      left: '25%',
      duration: 1200,
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.prompt-text',
      duration: 500,
      easing: 'easeOutExpo',
      opacity: 0,
    });

    anime({
      targets: '.result-text',
      duration: 1300,
      easing: 'easeOutExpo',
      opacity: 1,
    });

    anime({
      targets: '.result-image',
      duration: 1200,
      easing: 'easeOutExpo',
      opacity: 1,
    });

    anime({
      targets: '.resultimage-container',
      duration: 1200,
      easing: 'easeOutExpo',
      bottom: '40%',
    });

    
  };

  const handleKoreaButtonClick = () => {
    // Scroll to the "이길 것 같은 팀을" section
    if (promptContainerRef.current) {
      promptContainerRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsZoomed(true);
      setIsAlternateText(prev => !prev);
      setTimeout(() => {


        // Zoom out the page
        setIsZoomed(false);
      }, 3000);
      
      setTimeout(() => {
        handleYonseiVictory();
      }, 5000);
      
      setTimeout(() => {
        goNextEvent();
      }, 8000);
    };
 
 
  };

  const YonseiButtonClick = () => {
    
    
    handleYonseiVictory();

    
    setTimeout(() => {
      goNextEvent();
    }, 3000);
  };

  return (
    <div className={`page-wrapper ${isZoomed ? 'zoomed' : ''}`}>
      
      <div className="page-backgrounds-Yonsei">
        <h5 className="headertext-round">Round 4</h5>
        <h3 className="headertext-event">럭비</h3>
      </div>

      <div className="header-container">
        <h5 className="headertext-round">Round 4</h5>
        <h3 className="headertext-event">럭비</h3>
        
        <div className="resultimage-container">
          <img className="result-image" src="images/congratulation.svg" alt="승리 이미지"></img>
        </div>
        
        <div className="prompt-container" ref={promptContainerRef}>
        

          <h1 className="prompt-text">
            {isAlternateText ? (
              <span className="animated-text" style={{ transitionDelay: "0s" }}>
                이길 것 같지 <span className="underline-text">않은</span> 팀을
              </span>
            ) : (
              <span className="animated-text" style={{ transitionDelay: "0s" }}>
                이길 것 같은 팀을
              </span>
            )}
          </h1>
          <h1 className="prompt-text">선택해주세요</h1>
        </div>
        <div className="result-container">
          <h4 className="result-text">&apos;연세대&apos;</h4>
          <h4 className="result-text">승리</h4>
        </div>
      </div>
      <div className="body-container">
        <img className="character-image tiger-image" src="images/tiger-character.svg" alt="호랑이 캐릭터" />
        <img className="character-image eagle-image" src="images/eagle-character.svg" alt="독수리 캐릭터" />
        <img className="ball-image-Yonsei" src="images/rugby-ball.svg" alt="럭비공" />
      </div>
      <div className="buttons-container">
        <div className="button-container korea">
          <div id="korea" className="univ-button" onClick={handleKoreaButtonClick}>
            <img id="korea-logo" src="images/korea_logo.svg" alt="고대" />
          </div>
        </div>
        <div className="button-container yonsei">
          <div id="yonsei" className="univ-button" onClick={YonseiButtonClick}>
            <img id="yonsei-logo" src="images/yonsei_logo.svg" alt="연대" />
          </div>
        </div>
        <img className="lightning-icon" src="images/lightning.png" alt="아이콘" />
      </div>
    </div>
    
  );
}