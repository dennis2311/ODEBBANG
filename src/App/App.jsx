import { useState, useEffect } from "react";
import { Content } from "./Content";
import "./app.css";

/**
 * 'src/main.jsx' 파일에서 import 하여 처음 랜더링 되는 기초 컴포넌트입니다. 아래 역할을 수행합니다:
 *
 * - 전달된 URL 경로에서 고려대와 연세대 중 어느 대학을 응원하도록 강제할지 정하고 해당 값을 상태로 관리합니다. (univ)
 * - 해당 값은 'KOREA' 또는 'YONSEI' 중 하나의 값을 가집니다.
 * - string 형태의 URL 경로 값을 ASCII 값으로 변환하여 짝수인 경우 'KOREA', 홀수인 경우 'YONSEI' 로 설정합니다.
 * - 만약 URL 경로 정보가 없다면 랜덤하게 정합니다.
 * @author 현웅
 */
export function App() {
  const [univ, setUniv] = useState();

  useEffect(() => {
    console.log("APP rendered");
    // const url = new URL(window.location.href);
    // const univ = url.searchParams.get("univ");
    Math.random() < 0.5 ? setUniv("KOREA") : setUniv("YONSEI");
  }, []);

  return (
    <div className="app-container">
      {/* 디버깅을 쉽게 할 수 있도록 추가한 부분이며, 실제 배포에선 제거합니다. */}
      <span
        style={{ display: "flex", justifyContent: "center", padding: 8 }}
      >{`강제 응원 대학: ${univ === "KOREA" ? "고려대" : "연세대"}`}</span>

      <Content univ={univ} />
    </div>
  );
}
