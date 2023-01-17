import React from "react";
import * as T from "../components/StyledText";
import { imgList } from "../data/imgListDummy";

const Home = () => {
  return (
    <div className="page-container">
      <div
        className="section-container-col"
        style={{
          justifyContent: "center",
          marginBottom: "200px",
        }}
      >
        <T.BigTitle>Infoteam</T.BigTitle>
        <T.Text>
          우리는 GIST 학부 학생들의 삶을 IT기술을 이용해 편리하게 만들고자 하는{" "}
          <br />
          지스트대학 총학생회 (비상대책위원회) 정보국입니다.
        </T.Text>
      </div>
      <div className="section-container-col">
        <T.Title>
          주로 GIST 학생들에게 도움이 되는 <br />
          웹서비스들을 만들고,
        </T.Title>
        <div className="list-container">
          {imgList.map((item) => {
            return (
              <img
                src={item.imgSrc}
                style={{ width: "230px", padding: "20px" }}
              />
            );
          })}
        </div>
      </div>
      <div className="section-container-col">
        <T.Title>그리고 다른 여러 일들을 합니다</T.Title>
        <div className="list-container">
          {imgList.map((item) => {
            return (
              <img
                src={item.imgSrc}
                style={{ width: "230px", padding: "20px" }}
              />
            );
          })}
        </div>
      </div>
      <div className="section-container-col">
        <T.Title>인포팀의 협업 및 소통 방법</T.Title>
        <div className="list-container">
          {imgList.map((item) => {
            return (
              <img
                src={item.imgSrc}
                style={{ width: "230px", padding: "20px" }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
