import React, { Children } from "react";
import { useMediaQuery } from "react-responsive";
import useIsMobile from "../hooks/useIsMobile";
import LinkButton from "./button/LinkButton";
import * as T from "./StyledText";

function Service({ name, info, image_path, page_path, github_path }) {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  console.log("mobile", isMobile);

  return (
    <div className="service-container">
      <img
        src={image_path}
        style={{
          marginRight: isMobile ? "0px" : "70px",
          minWidth: "270px",
          minHeight: "270px",
          width: "270px",
          height: "270px",
          objectFit: "contain",
          borderRadius: "10px",
          backgroundColor: "#fbfbfb",
          boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.1)",
        }}
      />
      <div className="service-right">
        <T.ServiceName>{name}</T.ServiceName>
        <T.ServiceInfo>{info}</T.ServiceInfo>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LinkButton category="page" linkpath={page_path}></LinkButton>
          <LinkButton category="github" linkpath={github_path}></LinkButton>
        </div>
      </div>
    </div>
  );
}

export default Service;
