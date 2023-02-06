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
  z-index: 0;
  align-self: flex-end;
  left: 610px;
  transform: translate(0, -17.5px);
  width: 475px;
  object-fit: contain;
  border-radius: 10px;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    align-self: center;
    width: 350px;
    margin: 50px 0px 0px;
  }
`;

function HomeSec2Info({ innerRefArr }) {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 2, 0.2),
  };
  return (
    <SectionContainerCol
      style={{
        backgroundColor: "#F5F5F5",
        paddingBlock: "0px",
      }}
      ref={(el) => (innerRefArr.current[1] = el)}
    >
      <InfoWrap>
        <T.InfoText {...animatedItem[0]}>
          저희는 <br />
          GIST 학생들의 삶을 <br />
          <span style={{ fontWeight: "bold" }}>IT기술</span>을 이용해 <br />
          편리하게 <br />
          만들고자 합니다
        </T.InfoText>
        <InfoBackImg src={infoBackImg} />
      </InfoWrap>
    </SectionContainerCol>
  );
}

export default HomeSec2Info;
