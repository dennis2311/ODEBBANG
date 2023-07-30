/**
 * 종목 - 럭비 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */

import { useRef, useState } from 'react';

export function RugbyYonsei({ goNextEvent }) {
  console.log("채원 수정");
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef(null);

  const handleZoomToText = () => {
    const textElement = textRef.current;
    if (textElement) {
      textElement.scrollIntoView({
        behavior: 'smooth', // 스무스 스크롤을 위한 옵션
        block: 'center', // 문구가 화면 세로 중앙에 위치하도록 설정
        inline: 'center', // 문구가 화면 가로 중앙에 위치하도록 설정
      });
      setIsExpanded(true); // 문구 부분으로 시선을 이동시키면 확대되도록 상태 변경
    }
  };


  return (
      <div className="event container">
        <p
          className={`event__subtitle ${isExpanded ? 'expanded' : ''}`}
          ref={textRef}
        >
          이길 것 같은 팀은?
        </p>

      <h1 className="event__title">럭비</h1>

      <div className="event__btnRow">
        <button id="korea" onClick={handleZoomToText}>고대</button>
        <button id="yonsei" onClick={goNextEvent}>
          연대
        </button>
      </div>
    </div>
  );
}
