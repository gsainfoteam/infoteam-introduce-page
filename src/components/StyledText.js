import styled from "styled-components";

/* Home & Basic text */

export const BigTitle = styled.div`
  margin-block: 8px;
  font-size: 130px;
  font-weight: bold;
  text-align: center;
  @media;
`;

export const Title = styled.div`
  margin-block: 10px;
  line-height: 130%;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
`;

export const TitleInBigBold = styled.span`
  margin-block: 10px;
  line-height: 130%;
  font-size: 45px;
  font-weight: bold;
  text-align: center;
`;

export const SubTitle = styled.div`
  margin-block: 10px;
  line-height: 130%;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

export const Text = styled.div`
  margin-block: 10px;
  line-height: 130%;
  font-size: 25px;
  text-align: center;
  word-break: keep-all;
`;
export const TextInBold = styled.span`
  line-height: 130%;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

export const LargeText = styled.div`
  margin-block: 10px;
  line-height: 150%;
  font-size: 40px;
  text-align: center;
  word-break: keep-all;
`;
export const LargeTextInBold = styled.span`
  line-height: 150%;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

export const LinkText = styled.div`
  margin-block: 10px;
  line-height: 130%;
  font-size: 25px;
  text-align: center;
  word-break: keep-all;
  cursor: pointer;
  transition: 0.1s linear;
  &:hover {
    color: #707070;
    font-size: 27px;
  }
`;

/* Home - WorkEtcCardSet 의 카드 속 text */
export const DevnightText = styled.div`
  margin-top: 60px;
  margin-bottom: 10px;
  line-height: 150%;
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
export const NasText = styled.div`
  margin: 10px 25px;
  line-height: 130%;
  color: black;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
export const gidaesaengText = styled.div`
  margin: 10px 20px;
  line-height: 135%;
  color: black;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

/* Service info box ; text */
export const ServiceName = styled.div`
  margin-bottom: 30px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

export const ServiceInfo = styled.div`
  margin-block: 20px;
  margin-bottom: 30px;
  line-height: 130%;
  font-size: 15px;
  text-align: justify;
`;

/* Member info card ; text */
export const MemberName = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const MemberInfo = styled.div`
  margin-bottom: 2px;
  font-size: 16px;
  text-align: center;
`;

/*
const Normal = styled.div`
  margin-bottom: ${(props) => props.mb || "20px"};
  font-size: ${(props) => props.size || "30px"};
  font-weight: ${(props) => props.sty || "normal"};
  text-align: ${(props) => props.pos || "center"};
`;
*/
