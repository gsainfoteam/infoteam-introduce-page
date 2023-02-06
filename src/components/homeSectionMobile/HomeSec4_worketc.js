import React from "react";
import * as T from "../styled/StyledText";
import useScrollFadeIn from "../../hooks/useScrollFade";
import { SectionContainerCol } from "../styled/StyledContainerGlobal";
import WorkEtcCardSetMobile from "../card/WorkEtcCardSetMobile";

function HomeSec4WorkEtcMobile({ innerRefArr }) {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0),
    1: useScrollFadeIn("up", 2, 0.2),
    2: useScrollFadeIn("up", 2, 0.3),
    3: useScrollFadeIn("up", 2, 0.4),
  };

  return (
    <SectionContainerCol
      style={{ backgroundColor: "#F5F5F5", minHeight: "0px" }}
      ref={(el) => (innerRefArr.current[3] = el)}
    >
      <T.Title style={{ marginTop: "9vw" }}>
        그리고 <span style={{ fontWeight: "bold" }}>다른 여러 일들</span>을
        합니다
      </T.Title>
      <T.WorkEtcSubtitleMobile>
        - 아래 카드들을 터치하면 설명이 나옵니다 -
      </T.WorkEtcSubtitleMobile>
      <WorkEtcCardSetMobile />
    </SectionContainerCol>
  );
}

export default HomeSec4WorkEtcMobile;
