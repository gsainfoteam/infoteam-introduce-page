import React from "react";
import styled from "styled-components";
import * as T from "../StyledText";
import { workToolCardList } from "../../data/workToolCard_imgs";
import useScrollFadeIn from "../../hooks/useScrollFade";

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

function HomeSec5WorkTool() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0),
    1: useScrollFadeIn("up", 2, 0.2),
    2: useScrollFadeIn("up", 2, 0.3),
    3: useScrollFadeIn("up", 2, 0.4),
  };

  return (
    <div className="section-container-col" style={{}}>
      <T.Title style={{ marginBlock: "50px 40px" }}>
        인포팀이 <span style={{ fontWeight: "bold" }}>일하는 방법</span>
      </T.Title>
      <T.SubTitle>
        <span style={{}}>팀원</span>으로서
      </T.SubTitle>
      <div
        className="list-container"
        style={{ marginTop: "15px", marginBottom: "0px" }}
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
                <T.WorktoolText style={{ marginBottom: "30px" }}>
                  {item.name}
                </T.WorktoolText>
              </div>
            );
        })}
      </div>
      <T.SubTitle>
        <span style={{}}>개발자</span>로서
      </T.SubTitle>
      <div
        className="list-container"
        style={{ marginTop: "15px", marginBottom: "0px" }}
      >
        {workToolCardList.map((item, index) => {
          if (item.category == "devTool")
            return (
              <div
                style={
                  index != workToolCardList.length - 1
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
