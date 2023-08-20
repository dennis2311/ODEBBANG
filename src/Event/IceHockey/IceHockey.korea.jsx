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
    <div className="page-wrapper">
      <div className="page-background">
        <h5 className="headertext-round">Round 5</h5>
        <h3 className="headertext-event">빙구</h3>
      </div>
      <div className="header-container">
        <h5 className="headertext-round">Round 5</h5>
        <h3 className="headertext-event">빙구</h3>
        <div className="resultimage-container">
          <img className="result-image" src="images/congratulation.svg" alt="승리 이미지"></img>
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
        <img className="character-image tiger-image" src="images/tiger-character.svg" alt="호랑이 캐릭터" />
        <img className="character-image eagle-image" src="images/eagle-character.svg" alt="독수리 캐릭터" />
        <img className="ball-image" src="images/basketball-image.png" alt="농구공" />
      </div>
      <div className="buttons-container">
        <div className="button-container korea">
          <div id="korea" className="univ-button" onClick={goNextEvent}>
            <img id="korea-logo" src="images/korea_logo.svg" alt="고대" />
          </div>
        </div>
        <div className="button-container yonsei">
          <div ref={origin} id="yonsei" onClick={handleClick}>
            <img id="yonsei-logo" src="images/yonsei_logo.svg" alt="연대" />
          </div>
          <div ref={show} id="yonsei" className="move" style={{ top: mouseY + 20 + "px", left: mouseX + 20 + "px" }}>
            <img id="yonsei-logo" src="images/yonsei_logo.svg" alt="연대" />
          </div>
        </div>
        <img className="lightning-icon" src="images/lightning.png" alt="아이콘" />
      </div>
    </div>
  );
}
