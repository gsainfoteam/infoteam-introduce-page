import React from "react";
import styled from "styled-components";
import * as T from "../StyledText";

const HorizonLine = styled.div`
  width: 85%;
  border-bottom: 2px solid #000000;
  margin: 10px 0px;
`;

const LittleInput = styled.input`
  margin: 10px;
  padding: 15px;
  width: 256px;
  height: 35px;

  border: none;
  border-radius: 15px;

  &:focus {
    outline: 0px solid #ff6565;
  }

  &::placeholder {
    color: #ad1717;
  }

  ${T.FormText.componentStyle.rules[0]}
`;
const LargeInput = styled.textarea`
  margin: 10px;
  padding: 15px;
  width: 870px;
  height: 250px;

  resize: none;

  border: none;
  border-radius: 15px;

  &:focus {
    outline: 0px solid #ff6565;
  }

  vertical-align: top;
  ${T.FormText.componentStyle.rules[0]}
`;

const SubmitButton = styled.button`
  margin: 25px 0px 10px;

  width: 110px;
  height: 40px;
  background-color: #4d4d4d;
  border-radius: 10px;
  border: none;

  color: white;

  cursor: pointer;
  &:hover {
    background-color: #757575;
  }

  font-size: 16px;
`;

function HomeSec6Recruit() {
  return (
    <div
      className="section-container-col"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <T.Title style={{ marginBottom: "50px", fontSize: "50px" }}>
        인포팀에 바로 지원하기
      </T.Title>
      <HorizonLine />
      <T.FormText style={{ marginBottom: "40px" }}>
        새로고침하면, 작성 중인 내용이 사라집니다
      </T.FormText>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <LittleInput placeholder="이름 *" />
          <LittleInput placeholder="학번 *" />
          <LittleInput placeholder="전화번호 *" />
        </div>
        <LargeInput placeholder="개발에 참여하신 경험이 있으시면 적어주세요" />
        <LargeInput placeholder="하시고 싶으신 말이 있다면 적어주세요" />
      </div>
      <SubmitButton>제출하기</SubmitButton>
    </div>
  );
}

export default HomeSec6Recruit;
