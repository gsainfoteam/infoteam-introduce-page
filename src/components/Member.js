import React from "react";
import styled from "styled-components";
import * as T from "../components/StyledText";
import LinkButton from "./button/LinkButton";
import emailIcon from "../imgs/buttonImgs/emailIcon.png";

const MemberContainer = styled.div`
  width: 33.33%;
  margin-block: 15px;
  flex-grow: 0;
`;

const MemberCard = styled.div`
  margin: 0 auto;

  width: 270px;
  height: 160px;
  background-color: #f5f5f5;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HorizonLine = styled.div`
  width: 90%;
  border-bottom: 1.3px solid #000000;
  margin-top: 5px;
  margin-bottom: 17px;
`;

function Member({ name, role, email, githubLink, state }) {
  return (
    <MemberContainer>
      <MemberCard>
        <T.MemberName>
          {name}
          &nbsp;&nbsp;&nbsp;
          <T.MemberInfo>{role}</T.MemberInfo>
        </T.MemberName>

        <HorizonLine />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src={emailIcon}
            style={{ width: "20px", marginRight: "7px", paddingTop: "2px" }}
          ></img>
          <T.MemberInfo>{email}</T.MemberInfo>
        </div>
        <LinkButton
          category="github_profile"
          linkpath={githubLink}
        ></LinkButton>
      </MemberCard>
    </MemberContainer>
  );
}

export default Member;
