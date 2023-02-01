import React, { Children } from "react";
import { useMediaQuery } from "react-responsive";
import useIsMobile from "../hooks/useIsMobile";
import LinkButton from "./button/LinkButton";
import styled from "styled-components";
import * as T from "./StyledText";

const ServiceContainer = styled.div`
  display: flex;
  margin: 90px 0px;

  max-width: 885px;
  width: 80vw;

  justify-content: space-between;
  align-items: center;
`;
const ServiceRight = styled.div`
  margin: 20px 0px;
  justify-content: center;
  max-width: 700px;
`;

const ServiceImg = styled.img`
  margin-right: ${(props) => (props.isMobile ? `0px` : `70px`)};
  min-width: 270px;
  min-height: 270px;
  width: 270px;
  height: 270px;
  object-fit: contain;
  border-radius: 10px;
  background-color: #fbfbfb;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
`;

function Service({ name, info, image_path, page_path, github_path }) {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  console.log("mobile", isMobile);

  return (
    <ServiceContainer>
      <ServiceImg src={image_path} isMobile={isMobile} />
      <ServiceRight>
        <T.ServiceName>{name}</T.ServiceName>
        <T.ServiceInfo>{info}</T.ServiceInfo>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LinkButton category="page" linkpath={page_path}></LinkButton>
          <LinkButton category="github" linkpath={github_path}></LinkButton>
        </div>
      </ServiceRight>
    </ServiceContainer>
  );
}

export default Service;
