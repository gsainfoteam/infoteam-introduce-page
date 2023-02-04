import React from "react";
import { useNavigate } from "react-router-dom";
import * as T from "../styled/StyledText";
import * as C from "../card/StyledCard";
import useScrollFadeIn from "../../hooks/useScrollFade";
import {
  ListContainer,
  SectionContainerCol,
} from "../styled/StyledContainerGlobal";
import { useIsMobile } from "../../hooks/useIsMobile";

function HomeSec3Work({ innerRef }) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0),
    1: useScrollFadeIn("up", 2, 0.2),
    2: useScrollFadeIn("up", 2, 0.3),
    3: useScrollFadeIn("up", 2, 0.4),
  };

  return (
    <SectionContainerCol style={{ minHeight: "820px" }} ref={innerRef}>
      <T.Title style={{ marginTop: "50px" }}>
        주로 GIST 학생들에게 도움이 되는 <br />
        <span style={{ fontWeight: "bold" }}>웹서비스</span>
        들을 만들고,
      </T.Title>
      <ListContainer style={{ marginBottom: "80px" }}>
        <C.RedRoundRectCard style={isMobile ? {} : { marginLeft: "15px" }}>
          GISTORY
        </C.RedRoundRectCard>
        <C.RedRoundRectCard>AMS</C.RedRoundRectCard>
        <C.RedRoundRectCard style={isMobile ? {} : { marginLeft: "15px" }}>
          GISTALK
        </C.RedRoundRectCard>
      </ListContainer>
      <div style={{ height: "15px" }}>
        <T.LinkText onClick={() => navigate("/service")}>
          &gt;&gt; 자세히 보러가기
        </T.LinkText>
      </div>
      <div style={isMobile ? { height: "100px" } : {}} />
    </SectionContainerCol>
  );
}

export default HomeSec3Work;
