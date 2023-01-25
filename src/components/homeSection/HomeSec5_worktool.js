import React from "react";
import styled from "styled-components";
import * as T from "../StyledText";
import { workToolCardList } from "../../data/workToolCard_imgs";
import useScrollFadeIn from "../../hooks/useScrollFade";

const WorkToolCard_background = styled.div`
  margin: 10px 0px;
  width: 150px;
  height: 150px;
  background-color: #fbfbfb;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

function HomeSec5WorkTool() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0),
    1: useScrollFadeIn("up", 2, 0.2),
    2: useScrollFadeIn("up", 2, 0.3),
    3: useScrollFadeIn("up", 2, 0.4),
  };

  return (
    <div className="section-container-col" style={{}}>
      <T.Title style={{ marginBlock: "50px 50px" }}>
        인포팀이 일하는 방법
      </T.Title>
      <T.SubTitle>팀원으로서</T.SubTitle>
      <div
        className="list-container"
        style={{ marginTop: "20px", marginBottom: "0px" }}
      >
        {workToolCardList.map((item, index) => {
          if (item.category == "teamTool")
            return (
              <div style={index != 0 ? { marginLeft: "37.5px" } : {}}>
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
                <T.WorktoolText style={{ marginBottom: "50px" }}>
                  {item.name}
                </T.WorktoolText>
              </div>
            );
        })}
      </div>
      <T.SubTitle>개발자로서</T.SubTitle>
      <div
        className="list-container"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {workToolCardList.map((item, index) => {
          if (item.category == "devTool")
            return (
              <div style={index != 0 ? { marginLeft: "37.5px" } : {}}>
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
                <T.WorktoolText style={{ marginBottom: "80px" }}>
                  {item.name}
                </T.WorktoolText>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default HomeSec5WorkTool;
