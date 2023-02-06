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
  margin: 10px 0px;
  width: 142px;
  height: 142px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

function HomeSec5WorkTool({ innerRefArr }) {
  const isMobile = useIsMobile();
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0),
    1: useScrollFadeIn("up", 2, 0.2),
    2: useScrollFadeIn("up", 2, 0.3),
    3: useScrollFadeIn("up", 2, 0.4),
  };

  return (
    <SectionContainerCol
      style={{ minHeight: "700px" }}
      ref={(el) => (innerRefArr.current[4] = el)}
    >
      <T.Title style={{ marginBlock: "50px 40px" }}>
        인포팀이 <span style={{ fontWeight: "bold" }}>일하는 방법</span>
      </T.Title>
      <T.ToolSubTitle>팀원으로서</T.ToolSubTitle>
      <ListContainer style={{ marginTop: "15px", marginBottom: "0px" }}>
        {workToolCardImgList.map((item, index) => {
          if (item.category == "teamTool")
            return (
              <div
                style={
                  isMobile
                    ? { margin: "0px 15px 0px" }
                    : index != 0
                    ? { marginLeft: "37.5px" }
                    : {}
                }
              >
                <WorkToolCard_background>
                  <img
                    src={item.imgSrc}
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      padding: "20px",
                    }}
                  />
                </WorkToolCard_background>
                <T.WorktoolText style={{ marginBottom: "30px" }}>
                  {item.name}
                </T.WorktoolText>
              </div>
            );
        })}
      </ListContainer>
      <T.ToolSubTitle>개발자로서</T.ToolSubTitle>
      <ListContainer style={{ marginTop: "15px", marginBottom: "80px" }}>
        {workToolCardImgList.map((item, index) => {
          if (item.category == "devTool")
            return (
              <div
                style={
                  isMobile
                    ? { margin: "0px 15px 0px" }
                    : index != workToolCardImgList.length - 1
                    ? { marginRight: "37.5px" }
                    : {}
                }
              >
                <WorkToolCard_background>
                  <img
                    src={item.imgSrc}
                    style={{
                      maxWidth: "110px",
                      maxHeight: "110px",
                      padding: "20px",
                    }}
                  />
                </WorkToolCard_background>
                <T.WorktoolText>{item.name}</T.WorktoolText>
              </div>
            );
        })}
      </ListContainer>
    </SectionContainerCol>
  );
}

export default HomeSec5WorkTool;
