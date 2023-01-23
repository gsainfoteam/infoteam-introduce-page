import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import imgLogo from "../imgs/logoImgs/InfoteamLogo2.png";
import imgLogoMini from "../imgs/logoImgs/InfoteamLogoMini.png";

/* stlyed-components */
const HeaderContainer = styled.div`
  background-color: ${(props) =>
    props.simplify ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.5)"};
  box-shadow: ${(props) =>
    props.simplify ? "none" : "1px 1px 3px 1px rgba(0, 0, 0, 0.2)"};
  position: sticky;
  top: 0;
  transition: 0.3s;
  &.hide {
    transform: translateY(-64px);
  }
`;

const HeaderWrap = styled.div`
  height: 64px;
  margin-left: 25px;
  margin-right: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderRightWrap = styled.div`
  & > ul {
    display: flex;
  }
`;

const MenuButton = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 600;
  font-size: 120%;

  padding: 10px;
  margin-right: 15px;

  transition: 0.1s;

  &:hover {
    color: #707070;
  }
  &.active {
    color: #ff6565;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  &.active:hover {
  }
`;

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

/* header react component */
function Header() {
  const [simplify, setSimplify] = useState(false);
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset >= 1600 && deltaY >= 0;
    const simplify = pageYOffset <= 200;
    setHide(hide);
    setSimplify(simplify);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", throttleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", throttleScroll);
  }, [pageY]);

  return (
    <HeaderContainer className={hide && "hide"} simplify={simplify}>
      <HeaderWrap>
        <div>
          <Link style={{ display: "flex", alignItems: "center" }} to="/">
            <img src={imgLogo} style={{ width: "200px", marginLeft: "13px" }} />
          </Link>
        </div>
        <HeaderRightWrap>
          <ul>
            <li>
              <MenuButton to="/service">services</MenuButton>
            </li>
            <li>
              <MenuButton to="/member">members</MenuButton>
            </li>
          </ul>
        </HeaderRightWrap>
      </HeaderWrap>
    </HeaderContainer>
  );
}

export default Header;
