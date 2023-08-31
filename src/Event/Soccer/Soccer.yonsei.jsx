/**
 * 종목 - 축구 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */
import { useState, useEffect } from "react";
import "./soccer_yonsei.css";
import { easeInOut, motion } from "framer-motion";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export function SoccerYonsei({ goNextEvent }) {
  const { width, height } = useWindowSize();
  const variants = {
    click: {
      scale: [1, 0.6],
      rotate: [0, 120, 240, 360, 480],
      y: [0, 30, 60, 90, 130],
      x: [0, 400, 0, -60, -120],
    },
    scaled_Y: {
      scale: [1, 1.2],
      y: [0, -30, 10],
      x: [0, 0, -90],
    },
    scaled_K: {
      scale: [1, 0.8],
      y: [0, 40],
      opacity: [1, 1, 0],
    },
    ball: {
      y: [0, 10, 20],
      x: [0, 0, -100],
    },
    yonsei_logo: {
      x: [0, 0, -90],
      y: [0, 0, 20],
    },
    korea_logo: {
      opacity: [1, 0, 0],
    },
    lightning: {
      opacity: [1, 1, 0],
    },
  };

  const [clicked_K, koreaClicked] = useState(false);
  const [clicked_Y, yonseiClicked] = useState(false);
  const [infoTitle_first, setInfoTitleFirst] = useState("이길 것 같은 팀을");
  const [infoTitle_second, setInfoTitleSecond] = useState("선택해주세요");
  const [changeBackground, setChangeBackground] = useState(false);
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (clicked_Y) {
        setInfoTitleFirst("'연세대'");
        setInfoTitleSecond("승리");
        setChangeBackground(true);
      }
    }, 1700);
  }, [clicked_Y]);
  useEffect(() => {
    setTimeout(() => {
      if (changeBackground) {
        setVictory(true);
      }
    }, 1000);
  }, [changeBackground]);
  useEffect(() => {
    setTimeout(() => {
      if (victory) {
        goNextEvent();
      }
    }, 6000);
  }, [victory]);

  return (
    <div className={`${changeBackground ? "blue_container" : "container"}`}>
      {victory && (
        <motion.img
          className="congratulation"
          src="images/congratulation.svg"
          alt="승리 이미지"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}
      {victory && <Confetti width={width} height={height} />}
      <div className="header">
        <h1 className="round_title">Round 5</h1>
        <h3 className="event_title">축구</h3>
      </div>
      <div className="title">
        <h1 className="info_title">
          <p>{infoTitle_first}</p>
          <p>{infoTitle_second}</p>
        </h1>
      </div>
      <div className="character_container">
        <motion.img
          src="images/tiger.svg"
          alt=""
          className="tiger"
          variants={variants}
          animate={clicked_Y ? "scaled_K" : ""}
          transition={{ duration: 2 }}
        />
        <motion.img
          src="images/soccerball.svg"
          alt=""
          className="soccerball"
          variants={variants}
          animate={clicked_Y ? "ball" : ""}
          transition={{ duration: 2 }}
        />
        <motion.img
          src="images/eagle.svg"
          alt=""
          className="eagle"
          variants={variants}
          animate={clicked_Y ? "scaled_Y" : ""}
          transition={{ duration: 2 }}
        />
      </div>
      <div className="event__btnRow">
        <div className="button_container">
          <motion.button
            className="rotating-button"
            variants={variants}
            id="korea"
            onClick={() => {
              koreaClicked(true);
            }}
            animate={[clicked_K ? "click" : "", clicked_Y ? "korea_logo" : ""]}
            transition={{ duration: 2, ease: easeInOut }}
          >
            <img
              src="images/korea_logo.svg"
              alt="고대"
              className="korea_logo"
            />
          </motion.button>
        </div>
        <motion.img
          className="versus-icon"
          src="images/lightning.png"
          variants={variants}
          animate={clicked_Y ? "lightning" : ""}
          transition={{ duration: 2 }}
        />
        <div
          className="button_container"
          onClick={() => {
            yonseiClicked(true);
          }}
        >
          <button id="yonsei">
            <motion.img
              className="yonsei_logo"
              src="images/yonsei_logo.svg"
              variants={variants}
              animate={clicked_Y ? "yonsei_logo" : ""}
              transition={{ duration: 2 }}
              onClick={() => {
                koreaClicked(false);
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
