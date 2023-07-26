/**
 * 종목 - 농구 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */

import { useState } from "react";
import './Basketball.yonsei.css';

export function BasketballYonsei({ goNextEvent }) {
  const [isVisible, set_isVisible] = useState(true);
  const handleVisibility = ()=> {
    set_isVisible(false);
  };

  return (
    <>
      <h1 className="event__title">농구</h1>
      <div className="event__btnRow">
        <button style={{visibility: isVisible?"visible":"hidden"}} id="korea" onClick={handleVisibility}>고대</button>
        <button id="yonsei" onClick={goNextEvent}>
          연대
        </button>
      </div>
    </>
  );
}


// export function IceHockeyYonsei({ goNextEvent }) {
//   const [clickCount, set_clickCount] = useState(0);
//   const buttonRef = useRef();
//   const [isAnimating, set_isAnimating] = useState(false);

//   const handleCount = () => {
//     set_isAnimating(true);

//     setTimeout(() => {
//       // Reduce the button size by 10% on each click
//       const scale = 1 - 0.25 * (clickCount + 1);
//       buttonRef.current.style.transform = `scale(${scale})`;
//       set_isAnimating(false);
//       set_clickCount((prevClickCount) => prevClickCount + 1);
//     }, 200); // Duration of the animation in milliseconds (0.5 seconds in this example)
//   };

//   return (
//     <>
//       <h1 className="event__title">아이스하키</h1>
//       <div className="event__btnRow">
//         <button ref={buttonRef} id="korea" className={isAnimating ? 'animating' : ''} onClick={handleCount}>고대</button>
//         <button id="yonsei" onClick={goNextEvent}>
//           연대
//         </button>
//       </div>
//     </>
//   );
// };
