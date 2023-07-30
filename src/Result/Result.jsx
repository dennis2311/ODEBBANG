import { useEffect } from "react";
import "./result.css";
import YonseiResult from "../Resource/yonsei.png";
import Soccer from "../Resource/soccer.png";
import Lightening from "../Resource/lightening.png"
import JSConfetti from "js-confetti";
import { conteffi } from "../App/App";
import { useState } from "react";

/**
 * 이벤트 결과 페이지입니다.
 * 이벤트 결과를 확인하고 (총 참여자 수) 카카오톡 공유하기를 할 수 있습니다.
 * 이 때 카카오톡 공유하기를 통해 이동하는 페이지는 랜딩 페이지에서 선택한 대학교에 따라 달라집니다.
 * @author 현웅
 */
export function Result({ univ, selectedUniv }) {

  const addConfetti = () => {
    conteffi.addConfetti({
      emojis: ["🐯", "🦅"],
      emojiSize: 100,
      confettiNumber: 30,
    });
  };
  useEffect(() => {
    addConfetti();
  }, []);
  return (

    <div className="result container">
      <div className="result__title">
        <div><img src={YonseiResult} alt="yonsei" /></div>
        <div>투표현황</div>
        <div><img src={YonseiResult} alt="yonsei" /></div>
      </div>
      <div className="result_totalCnt">
        <span className="result_yonseiCnt">11,220</span>
        <span className="result_versus"><img src={Lightening} /></span>
        <span className="result_koreaCnt">11,220</span>
      </div>
      <span className="result__content">{`어차피 우승은 ${univ}!`}</span>
      <img src={Soccer} alt="soccer" />
      <div>공유해서 우리 학교 응원하기</div>
      <div className="result__shareBtn">{`친구에게 ${selectedUniv} 응원시키기`}</div>
    </div>
  )
}
