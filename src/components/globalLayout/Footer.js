import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.div`
  width: 100%;
  padding: 20px;
  height: 150px;
  background-color: #f5f5f5;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1.5;
  color: #888;
`;

function Footer() {
  return (
    <div>
      <div style={{ paddingBottom: '170px' }} />
      <FooterWrap>
        <div>지에스에이인포팀 (GSA Infoteam)</div>
        <div>고유번호: 217-82-87028</div>
        <div>대표자: 이정우</div>
        <div>
          주소: 광주광역시 북구 첨단과기로 123, 2학생회관동 209호 (오룡동,
          광주과학기술원)
        </div>
      </FooterWrap>
    </div>
  );
}

export default Footer;
