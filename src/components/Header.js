import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../imgs/InfoteamLogo.png";

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
