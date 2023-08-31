import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./reset.css"; // HTML 태그에 기본적으로 적용되는 기본 스타일을 초기화합니다.
import "./main.css";
import "./global.div.css";

/**
 * 우리가 만든 <App /> 컴포넌트를 HTML 문서의 root 요소에 렌더링합니다.
 * @author 현웅
 */
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
