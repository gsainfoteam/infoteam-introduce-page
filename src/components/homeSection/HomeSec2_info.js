import React from "react";
import styled from "styled-components";
import * as T from "../../components/StyledText";
import useScrollFadeIn from "../../hooks/useScrollFade";
import infoBackImg from "../../imgs/webserviceImg.png";

const InfoWrap = styled.div`
  width: 885px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InfoBackImg = styled.img`
  z-index: 0;
  align-self: flex-end;
  left: 610px;
  transform: translate(0, -17.5px);
  width: 475px;
  object-fit: contain;
  border-radius: 10px;
`;

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
      <InfoWrap>
        <T.Title style={{ fontSize: "50px", textAlign: "left", zIndex: "1" }}>
          저희는 <br />
          GIST 학생들의 삶을 <br />
          <span style={{ fontWeight: "bold" }}>IT기술</span>을 이용해 <br />
          편리하게 <br />
          만들고자 합니다.
        </T.Title>
        <InfoBackImg src={infoBackImg} />
      </InfoWrap>
    </div>
  );
}

export default HomeSec2Info;
