import { useEffect } from "react";
import "./result.css";
import YonseiResult from "/images/yonsei.png";
import Soccer from "/images/soccer.svg";
import Lightening from "/images/lightning.png";
import Basketball from "/images/basketball.svg";
import IceHockey from "/images/icehockey.svg";
import Rugby from "/images/rugby.svg";
import KoreaLose from "/images/KoreaLose.svg";
import YonseiLose from "/images/YonseiLose.svg";
import KoreaWin from "/images/KoreaWin.svg";
import YonseiWin from "/images/YonseiWin.svg";
import { conteffi } from "../App/App";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
const { Kakao } = window;
/**
 * 이벤트 결과 페이지입니다.
 * 이벤트 결과를 확인하고 (총 참여자 수) 카카오톡 공유하기를 할 수 있습니다.
 * 이 때 카카오톡 공유하기를 통해 이동하는 페이지는 랜딩 페이지에서 선택한 대학교에 따라 달라집니다.
 * @author 현웅
 */
export function Result({ univ, selectedUniv }) {
  const [event, setEvent] = useState(Soccer);
  const [yonseiCount, setYonseiCount] = useState(100);
  const [koreaCount, setKoreaCount] = useState(100);
  const [yonseiHeart, setYonseiHeart] = useState(false);
  const [koreaHeart, setKoreaHeart] = useState(false);

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
    } else if (0.25 < randomValue <= 0.5) {
      setEvent(Basketball);
    } else if (0.5 <= randomValue < 0.75) {
      setEvent(IceHockey);
    } else {
      setEvent(Rugby);
    }
  };

  const handleHeartButtonClick = (heartType) => {
    if (heartType === "yonseiHeart") {
      setYonseiHeart(true);
      setTimeout(() => {
        setYonseiHeart(false);
      }, 1000);
    } else if (heartType === "koreaHeart") {
      setKoreaHeart(true);
      setTimeout(() => {
        setKoreaHeart(false);
      }, 1000);
    }
  };

  const isKoreaStudent = selectedUniv === "KOREA";

  const onPressKakaoShare = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "2023 정기전의 승자는?",
        description: isKoreaStudent
          ? `고려대? 연세대?\n${yonseiCount + koreaCount}명이 참여했어요!`
          : `연세대? 고려대?\n${yonseiCount + koreaCount}명이 참여했어요!`,
        imageUrl: isKoreaStudent
          ? "https://i.imgur.com/7x1aMwZ.png"
          : "https://i.imgur.com/IgFRknr.png",
        link: {
          mobileWebUrl: `https://odebbang.netlify.app/?code=${selectedUniv}`,
        },
      },
      buttons: [
        {
          title: "승부 예측하기",
          link: {
            mobileWebUrl: `https://odebbang.netlify.app/?code=${selectedUniv}`,
          },
        },
      ],
    });
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("95a71b26f6664ca2b4b55cdff266eb37");
    addConfetti();
    getEvent();
    axios
      .request({
        method: "POST",
        url: "https://server.odebbang.com",
        data: {
          sharedBy: univ,
          university: selectedUniv,
        },
      })
      .then((res) => {
        const { korea, yonsei } = res.data;
        setKoreaCount(korea);
        setYonseiCount(yonsei);
      });
  }, []);
  const koreaWin = koreaCount > yonseiCount;
  const yesWin = !(koreaCount == yonseiCount);
  const gradientStopPercent = (koreaCount / (koreaCount + yonseiCount)) * 100;

  return (
    <div className={`result_container ${univ == "KOREA" ? "korea" : ""}`}>
      <div>
        <div className="result_title">
          <div className={yesWin ? (koreaWin ? "" : "win") : ""}>
            <img
              src={yesWin ? (koreaWin ? YonseiLose : YonseiWin) : YonseiWin}
              alt="eagle"
            />
          </div>
          <div>투표현황</div>
          <div className={yesWin ? (koreaWin ? "win" : "") : ""}>
            <img
              src={yesWin ? (koreaWin ? KoreaWin : KoreaLose) : KoreaWin}
              alt="tiger"
            />
          </div>
        </div>
        <div
          className="result_totalCnt"
          style={{ "--gradient-stop-percent": `${gradientStopPercent}%` }}
        >
          <span>{yonseiCount}</span>
          <span className="result_versus">
            <img src={Lightening} />
          </span>
          <span>{koreaCount}</span>
        </div>
      </div>
      <div className="heart_container">
        {/* <div
          className="add_heart"
          onClick={() => handleHeartButtonClick("yonseiHeart")}
        >
          <FontAwesomeIcon icon={faHeart} />
          {yonseiHeart && <span className="plus_one"> 💙+1</span>}
        </div>
        <div
          className="add_heart"
          onClick={() => handleHeartButtonClick("koreaHeart")}
        >
          <FontAwesomeIcon icon={faHeart} />
          {koreaHeart && <span className="plus_one"> ❤️+1</span>}
        </div> */}
      </div>
      <div className="result_img_share">
        <span className="result_content">
          {" "}
          {selectedUniv === "KOREA"
            ? koreaWin
              ? "이번 고연전도 고려대 우승!"
              : "이대로 연세대 우승..?"
            : koreaWin
            ? "이대로 고려대 우승...?"
            : "이번 연고전도 연세대 우승!"}
        </span>
        <div className="result_img">
          <img src={event} alt="soccer" />
        </div>
        <div className="result_shareText">공유해서 우리 학교 응원하기</div>
        <button className="result_shareBtn" onClick={onPressKakaoShare}>
          <FontAwesomeIcon icon={faComment} /> 카카오로 공유하기
        </button>
      </div>
      <div></div>
    </div>
  );
}
