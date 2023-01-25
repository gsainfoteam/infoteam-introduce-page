import React from "react";
import * as T from "../../components/StyledText";
import useScrollFadeIn from "../../hooks/useScrollFade";

function HomeSec2Info() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0),
    1: useScrollFadeIn("up", 2, 0.2),
    2: useScrollFadeIn("up", 2, 0.3),
    3: useScrollFadeIn("up", 2, 0.4),
  };
  return (
    <div
      className="section-container-col"
      style={{ backgroundColor: "#F5F5F5", paddingBlock: "0px" }}
    >
      <div {...animatedItem[0]}>
        <T.Title>
          저희는 <br />
          GIST 학부 학생들의 삶을 <br />
          <span style={{ color: "#FF6565" }}>IT기술</span>을 이용해 <br />
          편리하게 만들고자 합니다.
        </T.Title>
      </div>
    </div>
  );
}

export default HomeSec2Info;
