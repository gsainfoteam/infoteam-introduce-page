import React from "react";
import styled from "styled-components";
import * as T from "../../components/StyledText";

const GoToButtonWrap = styled.div`
  margin: 20px 35px;

  width: 130px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
`;

function GoToCompButton({ goto }) {
  //   const moveToComp = () => {
  //     console.log(compRef);
  //     compRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   };
  return (
    <div>
      <GoToButtonWrap onClick={() => goto}>
        <T.GoToCompButtonText>지금 지원하기</T.GoToCompButtonText>
      </GoToButtonWrap>
    </div>
  );
}

export default GoToCompButton;
