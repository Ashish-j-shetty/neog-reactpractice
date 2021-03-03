import React, { useState } from "react";

import "./darkmode.css";

export default function Darkmode() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div
      className="container"
      style={{ backgroundColor: `${darkmode ? "#111" : "#fff"}` }}
    >
      <h3 style={{ color: `${darkmode ? "#fff" : "#111"}` }}>
        Dark mode example
      </h3>

      <button
        className="toggle-button"
        onClick={() => setDarkmode(!darkmode)}
        style={{
          backgroundColor: `${darkmode ? "rgba(255,255,255,1) " : "#333"}`,
        }}
      >
        <div
          className="btn"
          style={{
            marginLeft: `${darkmode ? "55px" : "2px"}`,
            backgroundColor: `${darkmode ? "#333" : "rgba(255,255,255,1) "}`,
          }}
        ></div>
      </button>
    </div>
  );
}
