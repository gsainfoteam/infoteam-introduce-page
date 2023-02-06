import React from "react";
import * as T from "../styled/StyledText";
import * as C from "../card/StyledCard";
import useScrollFadeIn from "../../hooks/useScrollFade";
import {
  ListContainer,
  SectionContainerCol,
} from "../styled/StyledContainerGlobal";
import styled from "styled-components";
import ServiceMobile from "../card/ServiceMobile";
import { serviceInfoList } from "../../data/serviceInfos";

function HomeSec3WorkMobile({ innerRefArr }) {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0),
    1: useScrollFadeIn("up", 2, 0.2),
    2: useScrollFadeIn("up", 2, 0.3),
    3: useScrollFadeIn("up", 2, 0.4),
  };

  return (
    <SectionContainerCol
      style={{ minHeight: "0px" }}
      ref={(el) => (innerRefArr.current[2] = el)}
    >
      <T.Title style={{ marginTop: "8vw" }}>
        주로 GIST 학생들에게 도움이 되는 <br />
        <span style={{ fontWeight: "bold" }}>웹서비스</span>
        들을 만들고,
      </T.Title>
      {serviceInfoList.map((item) => {
        return (
          <ServiceMobile
            name={item.name}
            info={item.info}
            logoSrc={item.logoSrc}
            page_path={item.pageLink}
            github_path={item.githubLink}
          />
        );
      })}
      <div style={{ height: "8vw" }}></div>
    </SectionContainerCol>
  );
}

export default HomeSec3WorkMobile;
