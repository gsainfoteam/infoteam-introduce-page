import React from "react";
import * as T from "../components/StyledText";
import Service from "../components/Service";
import { ServiceList } from "../data/serviceDummy";
import { serviceInfoList } from "../data/serviceInfos";

const Services = () => {
  return (
    <div
      className="page-container"
      style={{
        marginTop: "0px",
      }}
    >
      <div
        className="section-container-col"
        style={{
          background: "linear-gradient(to top, #F7F7F7, #FFFFFF)",
          paddingBlock: "0px",
          minHeight: "300px",
        }}
      >
        <T.Title style={{ marginTop: "50px" }}>운영중인 서비스들</T.Title>
        <T.Text style={{ fontSize: "20px", marginBottom: "30px" }}>
          Infoteam이 개발하여 운영중인 서비스들을 소개합니다.
        </T.Text>
      </div>
      <div>
        {serviceInfoList.map((item) => {
          return (
            <Service
              name={item.name}
              info={item.info}
              image_path={item.imgSrc}
              page_path={item.pageLink}
              github_path={item.githubLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
