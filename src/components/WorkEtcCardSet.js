import React from "react";
import styled from "styled-components";
import * as T from "../components/StyledText";
import { workCardList } from "../data/workCard_imgs";

const WorkEtcCard_background_devnight = styled.div`
  margin: 50px 15px;
  width: 420px;
  height: 450px;
  background-color: #343244;
  border-radius: 20px;
  box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const cardColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorkEtcCard_background_rect = styled.div`
  margin: 30px 15px;
  width: 420px;
  height: 210px;
  background-color: #fbfbfb;
  border-radius: 20px;
  box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

function WorkEtcCardSet() {
  return (
    <div className="list-container">
      <WorkEtcCard_background_devnight>
        <T.DevnightText>
          <span style={{ fontSize: "50px" }}>
            <span style={{ color: "#E55D5D" }}>G</span>IST
          </span>
          <br /> Developers' night
        </T.DevnightText>
        {workCardList.map((item) => {
          if (item.name == "devnight")
            return <img src={item.imgSrc} style={{ width: "420px" }} />;
        })}
      </WorkEtcCard_background_devnight>
      <cardColWrapper>
        <WorkEtcCard_background_rect>
          {workCardList.map((item) => {
            if (item.name == "nas")
              return <img src={item.imgSrc} style={{ height: "190px" }} />;
          })}
          <T.NasText>
            <div style={{ textAlign: "start", marginBottom: "8px" }}>
              <span
                style={{
                  color: "#98C737",
                  fontSize: "34px",
                  marginRight: "3px",
                }}
              >
                N
              </span>
              etwork
              <br />
              <span
                style={{
                  color: "#98C737",
                  fontSize: "34px",
                  marginRight: "3px",
                }}
              >
                A
              </span>
              ttached
              <br />
              <span
                style={{
                  color: "#98C737",
                  fontSize: "34px",
                  marginRight: "3px",
                }}
              >
                S
              </span>
              torage
            </div>
            관리
          </T.NasText>
        </WorkEtcCard_background_rect>
        <WorkEtcCard_background_rect>
          {workCardList.map((item) => {
            if (item.name == "gidaesaeng")
              return <img src={item.imgSrc} style={{ height: "190px" }} />;
          })}
          <T.gidaesaengText>
            GIST 대학생
            <br />
            <div style={{ color: "#1877F2" }}>
              facebook
              <br />
              그룹
            </div>
            관리
          </T.gidaesaengText>
        </WorkEtcCard_background_rect>
      </cardColWrapper>
    </div>
  );
}

export default WorkEtcCardSet;
