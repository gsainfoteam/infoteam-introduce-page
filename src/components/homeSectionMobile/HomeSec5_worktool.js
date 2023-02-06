import React from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";
import { workToolCardImgList } from "../../data/workToolCardImgs";
import useScrollFadeIn from "../../hooks/useScrollFade";
import {
  ListContainer,
  SectionContainerCol,
} from "../styled/StyledContainerGlobal";
import { useIsMobile } from "../../hooks/useIsMobile";

// gray #fbfbfb white #ffffff
const WorkToolCard_background = styled.div`
  margin: 1.6vw 0px;
  width: 20vw;
  height: 20vw;
  background-color: #ffffff;
  border-radius: 3.5vw;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

function HomeSec5WorkToolMobile({ innerRefArr }) {
  const isMobile = useIsMobile();
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0),
    1: useScrollFadeIn("up", 2, 0.2),
    2: useScrollFadeIn("up", 2, 0.3),
    3: useScrollFadeIn("up", 2, 0.4),
  };

  return (
    <SectionContainerCol
      style={{ minHeight: "0px" }}
      ref={(el) => (innerRefArr.current[4] = el)}
    >
      <T.Title style={{ marginBlock: "9vw 3vw" }}>
        인포팀이 <span style={{ fontWeight: "bold" }}>일하는 방법</span>
      </T.Title>
      <T.ToolSubTitle>팀원으로서</T.ToolSubTitle>
      <ListContainer
        style={{ width: "75vw", marginTop: "2vw", marginBottom: "0px" }}
      >
        {workToolCardImgList.map((item, index) => {
          if (item.category == "teamTool")
            return (
              <div style={{ margin: "0px 2.5vw 0px" }}>
                <WorkToolCard_background>
                  <img
                    src={item.imgSrc}
                    style={{
                      maxWidth: "14.5vw",
                      maxHeight: "14.5vw",
                      padding: "3vw",
                    }}
                  />
                </WorkToolCard_background>
                <T.WorktoolText style={{ marginBottom: "2vw" }}>
                  {item.name}
                </T.WorktoolText>
              </div>
            );
        })}
      </ListContainer>
      <T.ToolSubTitle>개발자로서</T.ToolSubTitle>
      <ListContainer
        style={{
          width: "70vw",
          marginTop: "2vw",
          marginBottom: "0px",
        }}
      >
        {workToolCardImgList.map((item, index) => {
          if (item.category == "devTool")
            return (
              <div style={{ margin: "0px 2.5vw 0px" }}>
                <WorkToolCard_background>
                  <img
                    src={item.imgSrc}
                    style={{
                      maxWidth: "14.5vw",
                      maxHeight: "14.5vw",
                      padding: "2vw",
                    }}
                  />
                </WorkToolCard_background>
                <T.WorktoolText style={{ marginBottom: "2vw" }}>
                  {item.name}
                </T.WorktoolText>
              </div>
            );
        })}
      </ListContainer>
    </SectionContainerCol>
  );
}

export default HomeSec5WorkToolMobile;
