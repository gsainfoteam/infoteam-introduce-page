import React from "react";
import * as T from "../StyledText";
import WorkEtcCardSet from "../WorkEtcCardSet";
import useScrollFadeIn from "../../hooks/useScrollFade";

function HomeSec4WorkEtc() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0),
    1: useScrollFadeIn("up", 2, 0.2),
    2: useScrollFadeIn("up", 2, 0.3),
    3: useScrollFadeIn("up", 2, 0.4),
  };

  return (
    <div
      className="section-container-col"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <T.Title>
        그리고 <span style={{ fontWeight: "bold" }}>다른 여러 일들</span>을
        합니다
      </T.Title>
      <WorkEtcCardSet />
    </div>
  );
}

export default HomeSec4WorkEtc;
