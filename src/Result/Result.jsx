import { useEffect } from "react";
import "./result.css";
import YonseiResult from "../Resource/yonsei.png";
import Soccer from "../Resource/soccer.svg";
import Lightening from "../Resource/lightening.png"
import Basketball from "../Resource/basketball.svg"
import IceHockey from "../Resource/icehockey.svg"
import Rugby from "../Resource/rugby.svg"
import Tiger from "../Resource/tiger.svg"
import Eagle from "../Resource/eagle.svg"
import { conteffi } from "../App/App";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from "@fortawesome/free-solid-svg-icons";
/**
 * 이벤트 결과 페이지입니다.
 * 이벤트 결과를 확인하고 (총 참여자 수) 카카오톡 공유하기를 할 수 있습니다.
 * 이 때 카카오톡 공유하기를 통해 이동하는 페이지는 랜딩 페이지에서 선택한 대학교에 따라 달라집니다.
 * @author 현웅
 */
export function Result({ univ, selectedUniv }) {

  const yonsei_participants = 11220;
  const korea_participants = 11220;
  const [event, setEvent] = useState(Soccer);

  const addConfetti = () => {
    conteffi.addConfetti({
      emojis: ["🐯", "🦅"],
      emojiSize: 100,
      confettiNumber: 30,
    });
  };
  const getEvent = () => {
    const randomValue = Math.random();

    if (0 < randomValue <= 0.25) {
      setEvent(Soccer);
    }
    else if (0.25 < randomValue <= 0.5) {
      setEvent(Basketball);
    }
    else if (0.5 <= randomValue < 0.75) {
      setEvent(IceHockey);
    }
    else {
      setEvent(Rugby);
    }
  }
  useEffect(() => {
    addConfetti();
    getEvent();
  }, []);
  return (
    <div className={`result_container ${univ == "KOREA" ? 'korea' : ''}`}>
      <div >
        <div className="result_title">
          <div><img src={Eagle} alt="eagle" height="100px" /></div>
          <div>투표현황</div>
          <div><img src={Tiger} alt="tiger" height="100px" /></div>
        </div>
        <div className="result_totalCnt">
          <span>{yonsei_participants}</span>
          <span className="result_versus"><img src={Lightening} /></span>
          <span >{korea_participants}</span>
        </div>
      </div>
      <div className="result_img_share">
        <span className="result_content"> {univ === "KOREA" ? "이번 고연전도 고려대 승!" : "이번에도 연세대 승...?"}</span>
        <div className="result_img"><img src={event} alt="soccer" /></div>
        <div className="result_shareText">공유해서 우리 학교 응원하기</div>
        <div className="result_shareBtn"><FontAwesomeIcon icon={faComment} /> 카카오로 공유하기</div>
      </div>
    </div >
  )
}
