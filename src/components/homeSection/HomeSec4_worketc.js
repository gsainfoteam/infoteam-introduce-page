import React from "react";
import * as T from "../styled/StyledText";
import WorkEtcCardSet from "../card/WorkEtcCardSet";
import useScrollFadeIn from "../../hooks/useScrollFade";
import { SectionContainerCol } from "../styled/StyledContainerGlobal";

function HomeSec4WorkEtc({ innerRef }) {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0),
    1: useScrollFadeIn("up", 2, 0.2),
    2: useScrollFadeIn("up", 2, 0.3),
    3: useScrollFadeIn("up", 2, 0.4),
  };

  return (
    <SectionContainerCol
      style={{ backgroundColor: "#F5F5F5", minHeight: "820px" }}
      ref={innerRef}
    >
      <T.Title style={{ marginTop: "50px" }}>
        그리고 <span style={{ fontWeight: "bold" }}>다른 여러 일들</span>을
        합니다
      </T.Title>
      <WorkEtcCardSet />
    </SectionContainerCol>
  );
}

export default HomeSec4WorkEtc;
