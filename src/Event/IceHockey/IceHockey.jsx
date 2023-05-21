import { IceHockeyKorea } from "./IceHockey.korea";
import { IceHockeyYonsei } from "./IceHockey.yonsei";

/**
 * 종목 - 아이스하키 응원 화면
 * @author 현웅
 */
export function IceHockey({ univ, goNextEvent }) {
  if (univ === "KOREA") return <IceHockeyKorea goNextEvent={goNextEvent} />;
  if (univ === "YONSEI") return <IceHockeyYonsei goNextEvent={goNextEvent} />;
  return null;
}
