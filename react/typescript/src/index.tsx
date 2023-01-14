import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function onDoubleClick(a: number): string {
  return a + "";
}

root.render(
  <App />
  // <React.StrictMode>
  // {/* <App onDoubleClick={onDoubleClick} onChange={(id: number) => id} /> */}
  // </React.StrictMode>
);
