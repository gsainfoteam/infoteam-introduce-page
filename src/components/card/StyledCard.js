import React from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";

/* (gray; #fafafa, red ; #FF6565) */

/* Home cards - work 1 (devWork) */
export const RedRoundRectCard = styled.div`
  margin: 25px 35px;
  width: 243px;
  height: 160px;
  background-color: #ff6565;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 130%;
  font-size: 40px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
`;

/* Home cards - work 2 (etcWork) ==> 이거는 따로 파일 만들어서 관리 */

/* Home cards - workTool (teamTool & devTool) */
const WorkToolCard_background = styled.div`
  margin: 45px;
  width: 200px;
  height: 200px;
  background-color: #fbfbfb;
  border-radius: 20px;
  box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

function WorkToolCard({ name, category, image_path }) {
  return (
    <div style={{}}>
      <WorkToolCard_background>
        <img src={image_path} style={{ width: "270px" }} />
      </WorkToolCard_background>
      <T.WorkToolName style={{ fontWeight: "bold" }}>{name}</T.WorkToolName>
    </div>
  );
}

/* Home cards - work 2 (etcWork) */

/* Default gray cards (RED ; #FF6565) */

export default { WorkToolCard };
