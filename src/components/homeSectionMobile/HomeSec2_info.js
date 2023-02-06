import React from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";
import useScrollFadeIn from "../../hooks/useScrollFade";
import infoBackImg from "../../imgs/webserviceImg.svg";
import { SectionContainerCol } from "../styled/StyledContainerGlobal";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../../hooks/useIsMobile";

const InfoWrap = styled.div`
  width: 885px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;
const InfoBackImg = styled.img`
  align-self: center;
  width: 67vw;
  margin: 50px 0px 0px;
`;

function HomeSec2InfoMobile({ innerRefArr }) {
  const animatedItem = {
    0: useScrollFadeIn("up", 2.2, 0.2),
    1: useScrollFadeIn("up", 2.5, 0.5),
  };
  return (
    <SectionContainerCol
      style={{
        backgroundColor: "#F5F5F5",
        minHeight: "0px",
        paddingBlock: "0px",
      }}
      ref={(el) => (innerRefArr.current[1] = el)}
    >
      <div style={{ height: "10vw" }}></div>
      <InfoWrap>
        <T.InfoText {...animatedItem[0]}>
          저희는
          <span style={{ fontWeight: "bold" }}> IT기술</span>을 이용해 <br />
          GIST 학생들의 삶을 편리하게 만들고자 합니다
        </T.InfoText>
        <InfoBackImg src={infoBackImg} />
      </InfoWrap>
      <div style={{ height: "10vw" }}></div>
    </SectionContainerCol>
  );
}

export default HomeSec2InfoMobile;
