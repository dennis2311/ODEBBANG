import { useState } from "react";
import { Landing } from "src/Landing";
import { Event } from "src/Event";
import { Result } from "src/Result";

/**
 * 현재 어떤 페이지를 보여주는지 정하고 보여주는 컴포넌트입니다.
 * App 컴포넌트에서 호출되며, 어떤 대학을 응원할지 정하는 univ 상태값을 전달받습니다.
 * @author 현웅
 */
export function Content({ univ }) {
  /** 현재 보여줄 페이지를 정하는 상태값 */
  const [page, setPage] = useState("LANDING");
  /** 사용자가 선택한 대학을 저장하는 상태값 */
  const [selectedUniv, setSelectedUniv] = useState(); // 내가 선택한 대학, 함수

  /** 이벤트에서 사용할 페이지들 */
  const allPages = ["LANDING", "EVENT", "RESULT"];

  /**
   * page 상태값을 바꿔 다음 페이지로 이행합니다.
   * 현재 페이지가 마지막이라면 아무런 동작도 하지 않습니다.
   * @author 현웅
   */
  function goNextPage() {
    const nextPageIndex = allPages.indexOf(page) + 1;
    if (nextPageIndex < allPages.length) {
      setPage(allPages[nextPageIndex]);
    }
  }

  switch (page) {
    case "LANDING":
      return (
        <Landing
          goNextPage={goNextPage}
          univ={univ}
          setSelectedUniv={setSelectedUniv}
        />
      );
    case "EVENT":
      return <Event univ={univ} goNextPage={goNextPage} />;
    case "RESULT":
      return <Result univ={univ} selectedUniv={selectedUniv} />;
  }
  return null;
}
