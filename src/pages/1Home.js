import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as T from "../components/StyledText";
import * as C from "../components/StyledCard";
import WorkToolCard from "../components/StyledCard";
import { workToolCardList } from "../data/workToolCard_imgs";
import { imgList } from "../data/imgListDummy";
import catLogo from "../imgs/logoImgs/InfoteamMainCatlogo.png";
import WorkEtcCardSet from "../components/WorkEtcCardSet";

const WorkToolCard_background = styled.div`
  margin: 30px 50px;
  width: 200px;
  height: 200px;
  background-color: #fbfbfb;
  border-radius: 20px;
  box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <div
        className="section-container-col"
        style={{ paddingTop: "0px", paddingBottom: "160px" }}
      >
        {/* 
          <T.BigTitle>Infoteam</T.BigTitle> 
          <img src={catLogo} style={{ width: "600px", padding: "25px" }} />
        */}
        <T.BigTitle>Infoteam</T.BigTitle>
        <T.Text>
          저희는 <T.TextInBold>지스트</T.TextInBold>대학
          총학생회(비상대책위원회) <T.TextInBold>정보국</T.TextInBold>입니다.
        </T.Text>
      </div>
      <div
        className="section-container-col"
        style={{ backgroundColor: "#F5F5F5", paddingBlock: "0px" }}
      >
        <div>
          <T.LargeText>
            저희는 <br />
            GIST 학부 학생들의 삶을 <br />
            <T.LargeTextInBold>IT기술</T.LargeTextInBold>을 이용해 <br />
            편리하게 만들고자 합니다.
          </T.LargeText>
        </div>
      </div>
      <div className="section-container-col">
        <T.Title>
          주로 GIST 학생들에게 도움이 되는 <br />
          <T.TitleInBigBold>웹서비스</T.TitleInBigBold>들을 만들고,
        </T.Title>
        <div className="list-container" style={{ marginBottom: "80px" }}>
          <C.RedRoundRectCard>GISTORY</C.RedRoundRectCard>
          <C.RedRoundRectCard>AMS</C.RedRoundRectCard>
          <C.RedRoundRectCard>GISTALK</C.RedRoundRectCard>
        </div>
        <div style={{ height: "15px" }}>
          <T.LinkText onClick={() => navigate("/service")}>
            &gt;&gt; 자세히 보러가기
          </T.LinkText>
        </div>
      </div>
      <div
        className="section-container-col"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <T.Title>그리고 다른 여러 일들을 합니다</T.Title>
        <WorkEtcCardSet />
      </div>
      <div className="section-container-col" style={{}}>
        <T.Title style={{ marginBlock: "50px 80px" }}>
          인포팀이 일하는 방법
        </T.Title>
        <T.SubTitle>팀원으로서</T.SubTitle>
        <div
          className="list-container"
          style={{ marginTop: "0px", marginBottom: "70px" }}
        >
          {workToolCardList.map((item) => {
            if (item.category == "teamTool")
              return (
                <div>
                  <WorkToolCard_background>
                    <img
                      src={item.imgSrc}
                      style={{
                        maxWidth: "130px",
                        maxHeight: "130px",
                        padding: "20px",
                      }}
                    />
                  </WorkToolCard_background>
                  <T.Text style={{ fontWeight: "bold", marginBottom: "20px" }}>
                    {item.name}
                  </T.Text>
                </div>
              );
          })}
        </div>
        <T.SubTitle>개발자로서</T.SubTitle>
        <div
          className="list-container"
          style={{ marginTop: "0px", marginBottom: "70px" }}
        >
          {workToolCardList.map((item) => {
            if (item.category == "devTool")
              return (
                <div>
                  <WorkToolCard_background>
                    <img
                      src={item.imgSrc}
                      style={{
                        maxWidth: "130px",
                        maxHeight: "130px",
                        padding: "20px",
                      }}
                    />
                  </WorkToolCard_background>
                  <T.Text style={{ fontWeight: "bold", marginBottom: "20px" }}>
                    {item.name}
                  </T.Text>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

/* 
  === gray blank rect 3열 list 생성 ===
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
