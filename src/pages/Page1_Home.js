import React, { useCallback, useEffect, useRef } from "react";
import { PageContainer } from "../components/styled/StyledContainerGlobal";
import HomeSec1Main from "../components/homeSection/HomeSec1_main";
import HomeSec2Info from "../components/homeSection/HomeSec2_info";
import HomeSec3Work from "../components/homeSection/HomeSec3_work";
import HomeSec4WorkEtc from "../components/homeSection/HomeSec4_worketc";
import HomeSec5WorkTool from "../components/homeSection/HomeSec5_worktool";
import PageupButton from "../components/button/PageupButton";
import HomeSec6Recruit from "../components/homeSection/HomeSec6_recruit";
import useMoveScroll from "../hooks/useMoveScroll";
import HomeSecTest from "../components/homeSection/HomeSecTest_Move";

const Page1Home = () => {
  const sec4Ref = useRef();
  const { element: sec3Ref, onMoveToElement: onMoveToSec3 } = useMoveScroll();

  const onScroll = (sec) => {
    console.log("-->", sec);
    if (sec) {
      console.log(sec);
      sec.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <PageContainer>
      <HomeSec1Main />
      <HomeSec2Info />
      <HomeSec3Work innerRef={sec3Ref} />
      <HomeSec4WorkEtc innerRef={sec4Ref} />
      <HomeSec5WorkTool />
      {/* <PageupButton /> <HomeSec6Recruit /> */}
      {/* 
      <button onClick={() => onMoveToSec3()}>-----sec3으로 이동-----</button>
      <button onClick={() => onScroll(sec4Ref)}>sec4로 이동</button>
      */}
    </PageContainer>
  );
};

export default Page1Home;
