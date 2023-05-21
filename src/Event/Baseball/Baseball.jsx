import { BaseballKorea } from "./Baseball.korea";
import { BaseballYonsei } from "./Baseball.yonsei";

/**
 * 종목 - 야구 응원 화면
 * @author 현웅
 */
export function Baseball({ univ, goNextEvent }) {
  if (univ === "KOREA") return <BaseballKorea goNextEvent={goNextEvent} />;
  if (univ === "YONSEI") return <BaseballYonsei goNextEvent={goNextEvent} />;
  return null;
}
