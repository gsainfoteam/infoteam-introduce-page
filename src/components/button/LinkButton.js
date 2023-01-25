import React from "react";
import styled from "styled-components";
import * as T from "../StyledText";
import githubIcon from "../../imgs/buttonImgs/githubIcon.png";
import webpageIcon from "../../imgs/buttonImgs/webpageIcon.png";

const LinkButtonWrap = styled.div`
  margin: 0px 35px;

  width: 110px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
`;

function LinkButton({ category, linkpath }) {
  const iconSelect = (category) => {
    switch (category) {
      case "github":
        return (
          <img
            src={githubIcon}
            style={{ width: "20px", marginRight: "8px" }}
          ></img>
        );
      case "page":
        return (
          <img
            src={webpageIcon}
            style={{ width: "17px", marginRight: "8px" }}
          ></img>
        );
      default:
        return null;
    }
  };
  return (
    <LinkButtonWrap onClick={() => window.open(linkpath, "_blank")}>
      {iconSelect(category)}
      <T.LinkButtonText>{category}</T.LinkButtonText>
    </LinkButtonWrap>
  );
}

export default LinkButton;
