import React from "react";
import PageupButton from "../components/button/PageupButton";
import HomeSec1Main from "../components/homeSection/HomeSec1_main";
import HomeSec2Info from "../components/homeSection/HomeSec2_info";
import HomeSec3Work from "../components/homeSection/HomeSec3_work";
import HomeSec4WorkEtc from "../components/homeSection/HomeSec4_worketc";
import HomeSec5WorkTool from "../components/homeSection/HomeSec5_worktool";
import HomeSec6Recruit from "../components/homeSection/HomeSec6_recruit";

const Home = () => {
  return (
    <div className="page-container">
      <HomeSec1Main />
      <HomeSec2Info />
      <HomeSec3Work />
      <HomeSec4WorkEtc />
      <HomeSec5WorkTool />
      <PageupButton />
      <HomeSec6Recruit />
    </div>
  );
};

export default Home;

/* 
  === gray blank rect 3열 list 생성 ===
  import { imgList } from "../data/imgListDummy";
  <div className="list-container" style={{ marginBottom: "30px" }}>
    {imgList.map((item) => {
      return (
        <img
          src={item.imgSrc}
          style={{ width: "230px", padding: "20px" }}
        />
      );
    })}
  </div>
*/
