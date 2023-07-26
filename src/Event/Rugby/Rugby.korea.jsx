/**
 * 종목 - 럭비 응원 화면 (고려대학교 강제 응원)
 * @author 현웅
 */

import { useRef, useState } from 'react';

export function RugbyKorea({ goNextEvent }) {
  console.log('형진 수정');
  const [isZoomed, setIsZoomed] = useState(false);
  const [message, setMessage] = useState('이길 것 같은 팀은?');


  const handleZoomClick = () => {
    setMessage(isZoomed);
    setIsZoomed(!isZoomed);
    
    setTimeout(() => {
      goNextEvent();
    }, 2000); 
  };

  
  return (
    
    <div className={`event container ${isZoomed ? 'zoomed' : ''}`}>

      <p className="message">
        <span className="event__message">
          이길 것 같{''}
          {isZoomed && <span className="event__changed-message">지 않</span>}
        </span>
        <span className="event__message">
          은 팀은?
        </span>
      </p>
      <h1 className="event__title">럭비</h1>

      

      <div className="event__btnRow">
        <button id="korea" onClick={goNextEvent}>
          고대
        </button>
        <button id="yonsei" onClick={handleZoomClick}>
          연대ㅎㅎ
        </button>
      </div>
    </div>
  );
}

