import styled from "styled-components";

/* Home & Basic text */

export const BigTitle = styled.div`
  margin-block: 8px;
  font-size: 105px;
  font-weight: bold;
  text-align: center;
  @media;
`;

export const Title = styled.div`
  margin-block: 10px;
  line-height: 130%;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const Text = styled.div`
  margin-block: 10px;
  line-height: 130%;
  font-size: 20px;
  text-align: center;
`;

/* Service info box ; text */
export const ServiceName = styled.div`
  margin-bottom: 30px;
  font-size: 32px;
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
