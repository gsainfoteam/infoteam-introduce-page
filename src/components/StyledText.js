import styled from "styled-components";
import NotoSansRegular from "../fonts/NotoSansKR-Regular.woff";

/* Home & Basic text */

export const InfoteamLogo = styled.div`
  margin-block: 8px;
  font-size: 130px;
  font-weight: bold;
  text-align: center;
  font-family: "NotoSansRegular";
`;

const size_Title = "50px";
export const Title = styled.div`
  margin-block: 10px;
  line-height: 130%;
  font-size: ${size_Title};
  font-weight: bold;
  text-align: center;
`;
const size_SubTitle = "30px";
export const SubTitle = styled.div`
  margin-block: 10px;
  line-height: 130%;
  font-size: ${size_SubTitle};
  font-weight: bold;
  text-align: center;
`;

const size_Text = "28px";
export const Text = styled.div`
  margin-block: 10px;
  line-height: 130%;
  font-size: ${size_Text};
  text-align: center;
  word-break: keep-all;
`;
export const LinkText = styled.div`
  margin-block: 10px;
  line-height: 130%;
  font-size: ${size_Text};
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
export const GidaesaengText = styled.div`
  margin: 10px 20px;
  line-height: 135%;
  color: black;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

/* Home - Worktool 의 카드 이름 text */
export const WorktoolText = styled.div`
  margin: 12px 12px;
  line-height: 135%;
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

/* Home - Form 의 input 속 text */
export const FormText = styled.div`
  margin-block: 10px;
  line-height: 130%;
  font-size: 20px;
  word-break: break-all;
  word-wrap: break-word;
`;

/* --------------------------------------------------------------- */

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
  max-width: 620px;
  line-height: 130%;
  font-size: 15px;
  text-align: justify;
  word-break: keep-all;
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

/* Button */
export const LinkButtonText = styled.div`
  font-size: 15px;
`;
