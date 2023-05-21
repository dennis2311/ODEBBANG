import { RugbyKorea } from "./Rugby.korea";
import { RugbyYonsei } from "./Rugby.yonsei";

/**
 * 종목 - 럭비 응원 화면
 * @author 현웅
 */
export function Rugby({ univ, goNextEvent }) {
  if (univ === "KOREA") return <RugbyKorea goNextEvent={goNextEvent} />;
  if (univ === "YONSEI") return <RugbyYonsei goNextEvent={goNextEvent} />;
  return null;
}
