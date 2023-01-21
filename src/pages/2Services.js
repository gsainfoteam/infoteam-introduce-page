import React from "react";
import Service from "../components/Service";
import { ServiceList } from "../data/surviceDummy";

const Services = () => {
  return (
    <div className="page-container">
      {ServiceList.map((item) => {
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
      <div style={{ height: "150px" }}></div>
    </div>
  );
};

export default Services;
