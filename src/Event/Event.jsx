import { useState } from "react";
import { Baseball } from "./Baseball/Baseball";
import { Basketball } from "./Basketball/Basketball";
import { IceHockey } from "./IceHockey/IceHockey";
import { Rugby } from "./Rugby/Rugby";
import { Soccer } from "./Soccer/Soccer";
import "./event.css";

/**
 * 각 종목 별로 우승 대학을 선택하는 페이지입니다.
 * @author 현웅
 */
export function Event({ univ, goNextPage }) {
  const [event, setEvent] = useState("BASEBALL");

  /** 정기전에서 치뤄지는 모든 종목들입니다. */
  const allEvents = ["BASEBALL", "BASKETBALL", "ICEHOCKEY", "RUGBY", "SOCCER"];

  /**
   * 다음 종목 선택 페이지로 이동합니다.
   * 만약 마지막 종목인 경우, 결과 페이지로 이동합니다.
   * @author 현웅
   */
  function goNextEvent() {
    const nextEventIndex = allEvents.indexOf(event) + 1;
    if (nextEventIndex < allEvents.length) {
      setEvent(allEvents[nextEventIndex]);
    } else {
      goNextPage();
    }
  }

  /** 종목의 상태값에 따라 반환할 컴포넌트가 달라집니다. */
  function EventContent() {
    switch (event) {
      case "BASEBALL":
        return <Baseball univ={univ} goNextEvent={goNextEvent} />;
      case "BASKETBALL":
        return <Basketball univ={univ} goNextEvent={goNextEvent} />;
      case "ICEHOCKEY":
        return <IceHockey univ={univ} goNextEvent={goNextEvent} />;
      case "RUGBY":
        return <Rugby univ={univ} goNextEvent={goNextEvent} />;
      case "SOCCER":
        return <Soccer univ={univ} goNextEvent={goNextEvent} />;
    }
    return null;
  }

  return (
    <div className="page-container">
      <EventContent />
    </div>
  );
}
