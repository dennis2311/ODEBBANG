/**
 * 종목 - 아이스하키 응원 화면 (고려대학교 강제 응원)
 * @author 현웅
 */
import { useEffect, useRef, useState } from 'react';
import './korea.css';

export function IceHockeyKorea({ goNextEvent }) {
  const [mouseX, setMouseX] = useState(500);
  const [mouseY, setMouseY] = useState(500);
  const origin = useRef();
  const show = useRef();

  useEffect(() => {
    document.addEventListener('mousemove', function (e) {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
      console.log(e.clientX, e.clientY)
    }, false);
  }, [])

  const handleClick = () => {
    console.log(origin.current)
    origin.current.style.display = "none";
    show.current.style.visibility = "visible";
  }

  console.log('효은 수정함');
  return (
    <div className="page">
      <h1 className="event__title">아이스하키</h1>

      <div className="event__btnRow">
        <button id="korea" onClick={goNextEvent}>
          고대
        </button>
        <button id="yonsei" ref={origin} onClick={handleClick}>연대</button>
        <button className="move" ref={show} style={{ top: mouseY + 20 + "px", left: mouseX + 20 + "px" }}>연대</button>
      </div>
    </div>
  );
}
