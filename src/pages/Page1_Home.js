import React, { useCallback, useEffect, useRef, useState } from "react";
import { PageContainer } from "../components/styled/StyledContainerGlobal";
import HomeSec1Main from "../components/homeSection/HomeSec1_main";
import HomeSec2Info from "../components/homeSection/HomeSec2_info";
import HomeSec3Work from "../components/homeSection/HomeSec3_work";
import HomeSec4WorkEtc from "../components/homeSection/HomeSec4_worketc";
import HomeSec5WorkTool from "../components/homeSection/HomeSec5_worktool";
// import PageupButton from "../components/button/PageupButton";
// import HomeSec6Recruit from "../components/homeSection/HomeSec6_recruit";
// import useMoveScroll from "../hooks/useMoveScroll";
// import HomeSecTest from "../components/homeSection/HomeSecTest_Move";

/* throttle */
const throttle = function (callback, waitTime) {
  let timerId = null;
  return (e) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback.call(this, e);
      timerId = null;
    }, waitTime);
  };
};
/* debounce */
const debounce = function (callback, waitTime) {
  let timerId = null;
  if (timerId) {
    clearTimeout(timerId);
  }
  return (e) => {
    timerId = setTimeout(() => {
      callback.call(this, e);
      timerId = null;
    }, waitTime);
  };
};

/* Page1Home */
const Page1Home = () => {
  const secRefArrLength = 5;
  const secRefArr = useRef([]);

  const moveToSec = (secRefCur) => {
    console.log("-->", secRefCur);
    if (secRefCur) {
      secRefCur.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const documentRef = useRef(document);
  const [pageY, setPageY] = useState(0);
  const [currentSecIndex, setCurrentSecIndex] = useState(0);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY; // 스크롤 내리면 deltaY 양수, 올리면 음수
    const scrollUp = deltaY < 0;
    const scrollDown = deltaY > 0;

    if (scrollDown && currentSecIndex < secRefArrLength - 1) {
      setCurrentSecIndex(currentSecIndex + 1);
    } else if (scrollUp && currentSecIndex > 0) {
      setCurrentSecIndex(currentSecIndex - 1);
    }

    setPageY(pageYOffset);
  };

  const debounceScroll = debounce(handleScroll, 2000);
  useEffect(() => {
    documentRef.current.addEventListener("scroll", debounceScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", debounceScroll);
  }, [pageY]);

  useEffect(() => {
    if (0 <= currentSecIndex && currentSecIndex < secRefArrLength) {
      const secRefCur = secRefArr.current[currentSecIndex];
      moveToSec(secRefCur);
    }
    return () => {};
  }, [currentSecIndex]);

  // return ---------------------------------------------------------------------
  return (
    <PageContainer>
      <HomeSec1Main innerRefArr={secRefArr} />
      <HomeSec2Info innerRefArr={secRefArr} />
      <HomeSec3Work innerRefArr={secRefArr} />
      <HomeSec4WorkEtc innerRefArr={secRefArr} />
      <HomeSec5WorkTool innerRefArr={secRefArr} />
    </PageContainer>
  );
};

export default Page1Home;
