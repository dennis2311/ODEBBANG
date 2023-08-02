/**
 * 종목 - 농구 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */

import React, { useRef, useState } from "react";

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

  const handleKbtn = () => {
    setClicked(true);
  };

  return (
    <>
      <h1 className="event__title">농구</h1>
      <div className="event__btnRow">
        <div className="btn_container">
          <button id="btn1" className={`${isClicked ? 'flipK' : ''}`} onClick={handleKbtn}>고대</button>
          {isClicked && (<button id="btn2" className={`${isClicked ? 'flipY' : ''}`} onClick={goNextEvent}>연대</button>)}
        </div>
        <div className="btn_container">
          <button id="yonsei" onClick={goNextEvent}>
            연대
          </button>
        </div>
      </div>
    </>
  );
};
