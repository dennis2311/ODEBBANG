import { useState } from "react";
import "./soccer.css";
import { easeInOut, motion } from "framer-motion";

export function SoccerKorea({ goNextEvent }) {
  const variants = {
    click: {
      scale: [1, 0.6],
      rotate: [0, 120, 240, 360, 480],
      y: [0, 30, 60, 90, 130],
      x: [0, 400, 0, -60, -120],
      borderRadius: [0, 5, 10, 15, 20],
    },
    scaled_K: {
      scale: [1, 1.2],
      y: [0, -30, 20],
      x: [0, 0, 90],
    },
    scaled_Y: {
      scale: [1, 0.8],
      y: [0, 40],
      opacity: [1, 1, 0],
    },
    ball: {
      y: [0, 0, 20],
      x: [0, 0, 100],
    },
    korea_logo: {
      x: [0, 0, 110],
    },
    yonsei_logo: {
      opacity: [1, 0],
      scale: [1, 0.8],
      y: [0, 40],
      transition: {
        duration: 2,
        ease: easeInOut,
      },
    },
    lightning: {
      opacity: [1, 1, 0],
    },
  };

  const [clicked_K, koreaClicked] = useState(false);
  const [clicked_Y, yonseiClicked] = useState(false);
  const [infoTitle, setInfoTitle] = useState("이길 것 같은 팀을\n선택해주세요");

  return (
    <div className="container">
      <div className="header">
        <h1 className="round__title">Round 1</h1>
        <h3 className="event__title">축구</h3>
      </div>

      <div className="title">
        <h1 className="info_title" dangerouslySetInnerHTML={{ __html: infoTitle.replace(/\n/g, '<br />') }}></h1>
      </div>

      <div className="character_container">
        <motion.img
          src="images/tiger.svg"
          alt=""
          className="tiger"
          variants={variants}
          animate={clicked_K ? "scaled_K" : ""}
          transition={{ duration: 2 }}
        />
        <motion.img
          src="images/soccerball.svg"
          alt="" 
          className="soccerball" 
          variants={variants}
          animate={clicked_K ? "ball" : ""}
          transition={{ duration: 2 }}  
        />
        <motion.img
          src="images/eagle.svg"
          alt=""
          className="eagle"
          variants={variants}
          animate={clicked_K ? "scaled_Y" : ""}
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
              setInfoTitle("'고려대'\n승리");
            }}
            animate={clicked_Y ? "click" : ""}
            transition={{ duration: 2, ease: easeInOut }}
          >
            <motion.img
              src="images/korea_logo.svg"
              alt="고대"
              className="korea_logo"
              variants={variants}
              animate={clicked_K ? "korea_logo" : ""}
              transition={{ duration: 2 }}
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

        <div className="button_container" onClick={() => { yonseiClicked(true) }}>
          <button id="yonsei">
            <motion.img
              className="yonsei_logo"
              src="images/yonsei_logo.svg"
              variants={variants}
              animate={clicked_K ? "yonsei_logo" : ""}
              transition={{ duration: 2 }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}