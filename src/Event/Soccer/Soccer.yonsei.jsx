/**
 * 종목 - 축구 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */
import { useState } from "react";
import "./soccer.css";
import { easeInOut, motion } from "framer-motion"

export function SoccerYonsei({ goNextEvent }) {
  const variants = {
    click: {
      scale: [1, 0.6],
      rotate: [0, 120, 240, 360, 480],
      y: [0, 30, 60, 90, 130],
      x: [0, 400, 0, -60, -120],
      borderRadius: [0, 5, 10, 15, 20],
    },
  };

  const [clicked, setClicked] = useState(false);

  return (
    <div className="container">
      <div className="header">
        <h1 className="round__title">Round 1</h1>
        <h3 className="event__title">축구</h3>
      </div>
      <div className="title">
        <h1 className="info_title">이길 것 같은 팀을<br/> 선택해주세요</h1>
      </div>
      <div className="character_container">
        <img src="images/tiger.svg" alt="" className="tiger"/>
        {/* <img src="images/soccerball.svg" alt="" className="soccerball"/> */}
        <img src="images/eagle.svg" alt="" className="eagle"/>
      </div>
      <div className="event__btnRow">
        <div className="button_container">
          <motion.button
            className="rotating-button"
            variants={variants}
            id = "korea"
            onClick={() => {
              setClicked(true);
            }}
            animate={clicked ? "click" : "" }
            transition={{ duration: 2, ease: easeInOut }}
          >
            <img src="images/korea_logo.svg" alt="고대" className="korea_logo"/>
          </motion.button>
        </div>
        <img className="versus-icon" src="images/lightning.png" alt="아이콘" />
        <div className="button_container">
          <button id="yonsei" onClick={goNextEvent}>
            <img src="images/yonsei_logo.svg" alt="연대" className="yonsei_logo"/>
          </button>
        </div>
      </div>
    </div>
  );
}