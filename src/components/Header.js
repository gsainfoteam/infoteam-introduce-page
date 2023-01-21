import React from "react";
import { Link, NavLink } from "react-router-dom";
import imgLogo from "../imgs/InfoteamLogo.png";
// import Radium from "radium";

// const RadiatingNavLink = Radium(NavLink);
// const RadiatingLink = Radium(Link);

function Header() {
  return (
    <div className="header-container">
      <div className="header-wrap">
        <div className="header-left-wrap">
          <Link style={{ display: "flex", alignItems: "center" }} to="/">
            <img src={imgLogo} style={{ width: "250px" }} />
          </Link>
        </div>
        <div className="header-right-wrap">
          <ul>
            <li>
              <Link className="header-nav-item" to="/service">
                services
              </Link>
              {/* <NavLink
                className="header-nav-item"
                to="/service"
                activeClassName="header-nav-item-active"
              >
                services
              </NavLink> */}
              {/* <RadiatingNavLink
                className="header-nav-item"
                to="/service"
                style={{ color: "black", ":hover": { color: "gray" } }}
                activeStyle={{ color: "pink" }}
              >
                services
              </RadiatingNavLink> */}
            </li>
            <li>
              <Link className="header-nav-item" to="/member">
                members
              </Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/record">
                records
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
