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
  font-family: "Noto Sans KR", sans-serif;
`;

export const RedRoundRectCardMobile = styled.div`
  margin: 4vw 6vw;
  width: 40.5vw;
  height: 26.6vw;
  background-color: #ff6565;
  border-radius: 8.3vw;
  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 130%;
  font-size: 40px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
`;
