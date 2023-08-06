/**
 * 종목 - 농구 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */

import React, { useRef, useState } from "react";
import anime from 'animejs';
import './Basketball.yonsei.css';

// export function BasketballYonsei({ goNextEvent }) {
//   const [isVisible, set_isVisible] = useState(true);
//   const handleVisibility = ()=> {
//     set_isVisible(false);
//   };

//   return (
//     <>
//       <h1 className="event__title">농구</h1>
//       <div className="event__btnRow">
//         <button style={{visibility: isVisible?"visible":"hidden"}} id="korea" onClick={handleVisibility}>고대</button>
//         <button id="yonsei" onClick={goNextEvent}>
//           연대
//         </button>
//       </div>
//     </>
//   );
// };

///////////////////////////////////////////////////////////////////////////////////////////

// export function BasketballYonsei({ goNextEvent }) {
//   const [clickCount, set_clickCount] = useState(0);
//   const buttonRef = useRef();
//   const [isAnimating, set_isAnimating] = useState(false);

//   const handleCount = () => {
//     set_isAnimating(true);

//     setTimeout(() => {
//       const scale = 1 - 0.25 * (clickCount + 1);
//       buttonRef.current.style.transform = `scale(${scale})`;
//       set_isAnimating(false);
//       set_clickCount((prevClickCount) => prevClickCount + 1);
//     }, 200);
//   };

//   return (
//     <>
//       <h1 className="event__title">농구</h1>
//       <div className="event__btnRow">
//         <button ref={buttonRef} id="korea1" className={isAnimating ? 'animating' : ''} onClick={handleCount}>고대</button>
//         <button id="yonsei1" onClick={goNextEvent}>
//           연대
//         </button>
//       </div>
//     </>
//   );
// };

///////////////////////////////////////////////////////////////////////////////////////////

// export function BasketballYonsei({ goNextEvent }) {
//   const [KbtnClicked, setClickedStatus] = useState(false);
//   const YbuttonRef = useRef();
//   const KbuttonRef = useRef();

//   const handleKoreabtn = () => {
//     setClickedStatus(true);
//   };

//   return (
//     <>
//       <h1 className="event__title">농구</h1>
//       <div className="event__btnRow">
//         { KbtnClicked ?
//           (<button ref = {YbuttonRef} id="yonsei" onClick={goNextEvent}>연대</button>) :
//           (<button ref = {KbuttonRef} id="korea" onClick={handleKoreabtn}>고대</button>)
//         }
//         <button id="yonsei" onClick={goNextEvent}>
//           연대
//         </button>
//       </div>
//     </>
//   );
// };


///////////////////////////////////////////////////////////////////////////////////////////


export function BasketballYonsei({ goNextEvent }) {
  const [isClicked, setClicked] = useState(false);

  const handleKoreaClick = () => {
    setClicked(true);
  };

  const handleYonseiClick = () => {
    anime({
      targets: '.page-wrapper',
      backgroundPosition: '150% 300%',
      duration: 1500,
      easing: 'easeOutExpo',
      complete: () => {
        setTimeout(() => {
          goNextEvent();
        }, 500);
      },
    });
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="header-container">
          <h5 className="headertext-round">Round 2</h5>
          <h3 className="headertext-event">농구</h3>
          <div className="prompt-container">
            <h1 className="prompt-text">이길 것 같은 팀을</h1>
            <h1 className="prompt-text">선택해주세요</h1>
          </div>
        </div>
        <div className="body-container"></div>
        <div className="buttons-container">
          <div className="button-container">
            <div id="btn1" className={`univ-button ${isClicked ? 'flipK' : ''}`} onClick={handleKoreaClick}>
              <img src="images/korea_logo.svg" alt="고대" />
            </div>
            {isClicked && (<div id="btn2" className={`univ-button ${isClicked ? 'flipY' : ''}`} onClick={handleYonseiClick}><img src="images/yonsei_logo.svg" alt="연대" /></div>)}
          </div>
          <img className="versus-icon" src="images/lightning.png" alt="아이콘" />
          <div className="button-container">
            <div id="yonsei" className="univ-button" onClick={handleYonseiClick}>
              <img src="images/yonsei_logo.svg" alt="연대" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
