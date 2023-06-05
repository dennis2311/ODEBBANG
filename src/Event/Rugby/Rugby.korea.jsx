/**
 * 종목 - 럭비 응원 화면 (고려대학교 강제 응원)
 * @author 현웅
 */

import React, { useRef } from 'react';
import anime from 'animejs';

export function RugbyKorea({ goNextEvent }) {
  console.log("형진 수정");
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    anime({
      targets: buttonRef.current,
      translateX: '100vw',
      duration: 1000,
      easing: 'easeOutExpo'
    });
  };

  return (
    <>
      <h1 className="event__title">럭비</h1>

      <div className="event__btnRow">
        <button id="korea" onClick={goNextEvent}>
          고대
        </button>
        <button id="yonsei" onClick={handleButtonClick} ref={buttonRef}>
          연대
        </button>
      </div>
    </>
  );
}