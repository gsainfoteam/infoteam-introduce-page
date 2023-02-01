import React from "react";
import * as T from "../../components/StyledText";
import FontStyles from "../../fonts/font";
import catLogo from "../../imgs/logoImgs/InfoteamMainCatlogo.png";
import GoToCompButton from "../button/GoToCompButton";

//linear-gradient(to top, rgba(255,101,101,0.2)

function HomeSec1Main({ gotoSec6 }) {
  return (
    <div
      className="section-container-col"
      style={{
        minHeight: "760px",
        paddingTop: "0px",
        paddingBottom: "160px",
      }}
    >
      {/* 
          <T.BigTitle>Infoteam</T.BigTitle> 
          <img src={catLogo} style={{ width: "600px", padding: "25px" }} />
          <img src={InfoteamMainPinklogo} style={{ width: "600px", padding: "5px" }} />
        */}
      <FontStyles />
      <T.InfoteamLogo>Infoteam</T.InfoteamLogo>
      <T.Text>
        저희는 <span style={{ fontWeight: "bold" }}>지스트</span>대학
        총학생회(비상대책위원회){" "}
        <span style={{ fontWeight: "bold" }}>정보국</span>
        입니다.
      </T.Text>
    </div>
  );
}

export default HomeSec1Main;
