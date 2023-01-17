import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "48px",
          fontWeight: "bold",
        }}
      >
        해당 페이지를 찾지 못했습니다.
      </div>
      <div
        style={{
          marginBottom: "45px",
          fontSize: "28px",
        }}
      >
        주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
      </div>
      <div
        onClick={() => navigate("/")}
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#BE149A",
          cursor: "pointer",
        }}
      >
        메인 페이지로 이동
      </div>
    </div>
  );
};

export default NotFound;
