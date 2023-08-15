import { BasketballKorea } from "./Basketball.korea";
import { BasketballYonsei } from "./Basketball.yonsei";

/**
 * 종목 - 농구 응원 화면
 * @author 현웅
 */
export function Basketball({ univ, goNextEvent }) {
  if (univ === "KOREA") return <BasketballKorea goNextEvent={goNextEvent} />;
  if (univ === "YONSEI") return <BasketballYonsei goNextEvent={goNextEvent} />;
  return null;
}
