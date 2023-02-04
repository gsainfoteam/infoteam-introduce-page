import styled, { keyframes, css } from "styled-components";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../../hooks/useIsMobile";

/* Header text */
export const HeaderMenuText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  color: black;
  text-decoration: none;
  font-weight: normal;
  font-size: 18px;
`;

/* Home sec 1 */
export const InfoteamLogo = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 8px;
  font-size: 130px;
  font-weight: bold;
  text-align: center;
`;
export const LogoUnderText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 25px 35px;
  line-height: 130%;
  font-size: 28px;
  text-align: center;
  word-break: keep-all;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-block: 15px 35px;
    font-size: calc(10px + 2vw);
  }
`;
/* Home sec 2 */
export const InfoText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 45px;
  text-align: left;
  z-index: 1;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-block: 30px;
    text-align: center;
    font-size: calc(30px + 2vw);
  }
`;
/* Home sec 3~6 , Services , Members Title */
export const Title = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 40px;
  text-align: center;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    font-size: calc(15px + 2vw);
  }
`;
/* Home sec 5 - tool category subTitle */
export const ToolSubTitle = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 30px;
  text-align: center;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    font-size: calc(15px + 1vw);
  }
`;
/* Home sec 5 - work tool name */
export const WorkToolName = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 20px;
  text-align: center;
  word-break: keep-all;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    font-size: calc(10px + 1vw);
  }
`;

/* Services , Members subTitle */
export const SerMemSubTitle = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 20px;
  text-align: center;
  word-break: keep-all;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    font-size: calc(10px + 1vw);
  }
`;

/* Home sec 3 - Link text */
const blinkAnimation = keyframes`
  0%{
  }
  100%{
    font-size: 30px;
  }
`;
export const LinkText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 20px;
  text-align: center;
  word-break: keep-all;
  cursor: pointer;
  animation: ${blinkAnimation} 0.8s linear infinite alternate;
  transition: 0.8s linear;
  &:hover {
    color: #ff6565;
  }
`;

/* Home - WorkEtcCardSet 의 카드 속 text */
const dnTitleMoveIn = keyframes`
  0%{
    text-align: left;

  }
  100%{
    text-align: left;
    transform: translate(-50px, -17px); 
  }
`;
const nasTitleMoveIn = keyframes`
  0%{
    text-align: left;

  }
  100%{
    text-align: left;
    margin-left: 10px;
    transform: translate(-185px, 0px); 
  }
`;
const nasTitleMoveOut = keyframes`
  0%{
    text-align: left;
    margin-left: 10px;
    transform: translate(-185px, 0px); 
  }
  100%{
    text-align: left;
  }
`;
const gdsTitleMoveIn = keyframes`
  0%{
    text-align: left;

  }
  100%{
    text-align: left;
    transform: translate(-205px, 0px); 
  }
`;
const gdsTitleMoveOut = keyframes`
  0%{
    text-align: left;
    transform: translate(-205px, 0px); 
  }
  100%{
    text-align: left;
  }
`;
export const DevnightTitleText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 60px;
  margin-bottom: 10px;
  line-height: 150%;
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  ${(props) =>
    props.isHovering &&
    css`
      animation: ${dnTitleMoveIn} 0.4s linear forwards;
    `}
`;
export const DevnightInfoText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  position: absolute;
  bottom: 30px;
  width: 340px;
  line-height: 130%;
  color: white;
  font-size: 20px;
  text-align: justify;

  transition: 0.5s linear;
  ${(props) =>
    props.isHovering
      ? `
      opacity: 1;
      transform: translate(0px, -20px);
  `
      : `
      opacity: 0;
  `}
`;
export const NasTitleText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-left: 50px;
  line-height: 120%;
  color: #444444;
  font-size: 35px;
  font-weight: bold;
  text-align: right;

  ${(props) =>
    props.isHovering
      ? css`
          animation: ${nasTitleMoveIn} 0.5s linear forwards;
        `
      : css`
          animation: ${nasTitleMoveOut} 0.3s linear backwards; ;
        `}
`;
export const NasInfoText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  position: absolute;
  left: 245px;
  width: 155px;
  line-height: 130%;
  font-size: 20px;
  text-align: right;
  text-align: justify;
  direction: rtl;

  transition: 0.4s linear;
  ${(props) =>
    props.isHovering
      ? `
      opacity: 1;
      transform: translate(-20px, 0);
  `
      : `
      opacity: 0;
  `}
`;
export const GidaesaengTitleText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin: 10px 10px;
  line-height: 120%;
  color: #1d4a84;
  font-size: 35px;
  font-weight: bold;
  text-align: right;

  ${(props) =>
    props.isHovering
      ? css`
          animation: ${gdsTitleMoveIn} 0.5s linear forwards;
        `
      : css`
          animation: ${gdsTitleMoveOut} 0.3s linear backwards; ;
        `}
`;
export const GidaesaengInfoText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  position: absolute;
  left: 245px;
  width: 155px;
  line-height: 130%;
  font-size: 20px;
  text-align: justify;
  direction: rtl;

  transition: 0.4s linear;
  ${(props) =>
    props.isHovering
      ? `
      opacity: 1;
      transform: translate(-20px, 0);
  `
      : `
      opacity: 0;
  `}
`;

/* Home - Worktool 의 카드 이름 text */
export const WorktoolText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin: 12px 12px;
  line-height: 135%;
  color: black;
  font-size: 20px;
  text-align: center;
`;

/* Home - Form 속 text */
export const FormText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 20px;
  word-break: break-all;
  word-wrap: break-word;
`;

/* --------------------------------------------------------------- */

/* Service info box ; text */
export const ServiceName = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 30px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

export const ServiceInfo = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 20px;
  margin-bottom: 30px;
  max-width: 450px;
  line-height: 150%;
  font-size: 15px;
  text-align: center;
  word-break: keep-all;
`;

/* Member info card ; text */
export const MemberName = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
export const MemberInfo = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 3px;
  font-size: 13px;
  font-weight: normal;
  text-align: center;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    font-size: 11px;
  }
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
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
`;
export const CheckButtonText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;

  ${(props) => (props.isChecked ? `` : `color: #707070`)}
`;
export const GoToCompButtonText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
`;
