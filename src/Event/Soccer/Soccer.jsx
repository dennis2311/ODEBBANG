import { SoccerKorea } from "./Soccer.korea";
import { SoccerYonsei } from "./Soccer.yonsei";

/**
 * 종목 - 축구 응원 화면
 * @author 현웅
 */
export function Soccer({ univ, goNextEvent }) {
  if (univ === "KOREA") return <SoccerKorea goNextEvent={goNextEvent} />;
  if (univ === "YONSEI") return <SoccerYonsei goNextEvent={goNextEvent} />;
  return null;
}
