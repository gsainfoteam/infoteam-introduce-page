import React from "react";
import { useNavigate } from "react-router-dom";
import * as T from "../StyledText";
import * as C from "../StyledCard";
import useScrollFadeIn from "../../hooks/useScrollFade";

function HomeSec3Work() {
  const navigate = useNavigate();
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0),
    1: useScrollFadeIn("up", 2, 0.2),
    2: useScrollFadeIn("up", 2, 0.3),
    3: useScrollFadeIn("up", 2, 0.4),
  };

  return (
    <div className="section-container-col">
      <T.Title>
        주로 GIST 학생들에게 도움이 되는 <br />
        <span style={{ color: "#FF6565" }}>웹서비스</span>
        들을 만들고,
      </T.Title>
      <div className="list-container" style={{ marginBottom: "80px" }}>
        <C.RedRoundRectCard style={{ marginLeft: "15px" }}>
          GISTORY
        </C.RedRoundRectCard>
        <C.RedRoundRectCard>AMS</C.RedRoundRectCard>
        <C.RedRoundRectCard style={{ marginRight: "15px" }}>
          GISTALK
        </C.RedRoundRectCard>
      </div>
      <div style={{ height: "15px" }}>
        <T.LinkText onClick={() => navigate("/service")}>
          &gt;&gt; 자세히 보러가기
        </T.LinkText>
      </div>
    </div>
  );
}

export default HomeSec3Work;
