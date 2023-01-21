import React from "react";
import { useMediaQuery } from "react-responsive";
import useIsMobile from "../hooks/useIsMobile";
import * as T from "./StyledText";

function Service({ name, info, image_path, page_path, github_path }) {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  console.log("mobile", isMobile);

  return (
    <div className="service-container">
      <img
        src={image_path}
        style={{
          marginLeft: isMobile ? "20px" : "70px",
          marginRight: "20px",
          width: "270px",
        }}
      />
      <div className="service-right">
        <T.ServiceName>{name}</T.ServiceName>
        <T.ServiceInfo>{info}</T.ServiceInfo>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => window.open(page_path, "_blank")}>page</button>
          <button onClick={() => window.open(github_path, "_blank")}>
            github
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
