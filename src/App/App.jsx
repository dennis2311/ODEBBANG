import { useState, useEffect } from "react";
import { Content } from "./Content";
import JSConfetti from "js-confetti";

/**
 * 'src/main.jsx' 파일에서 import 하여 처음 랜더링 되는 기초 컴포넌트입니다. 아래 역할을 수행합니다:
 *
 * - 전달된 URL 경로에서 고려대와 연세대 중 어느 대학을 응원하도록 강제할지 정하고 해당 값을 상태로 관리합니다. (univ)
 * @author 현웅
 */
export function App() {
  const [univ, setUniv] = useState();
  const [selectedUniv, setSelectedUniv] = useState("");

  useEffect(() => {
    const code = new URL(window.location.href).search
      .replace("?code=", "")
      .toLowerCase();
    if (code.includes("korea") || code.includes("f1ek0t")) {
      setUniv("KOREA");
    } else if (code.includes("yonsei") || code.includes("e09yyz")) {
      setUniv("YONSEI");
    } else {
      setUniv(Math.random() > 0.5 ? "KOREA" : "YONSEI");
    }
  }, []);

  return (
    <div
      className="app-container"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "aliceblue",
      }}
    >
      <Content
        univ={univ}
        selectedUniv={selectedUniv}
        setSelectedUniv={setSelectedUniv}
      />
    </div>
  );
}

export const conteffi = new JSConfetti();
