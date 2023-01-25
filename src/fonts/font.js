import { createGlobalStyle } from "styled-components";
import NotoSansRegular from "../fonts/NotoSansKR-Regular.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'NotoSansRegular';
        src: local('NotoSansRegular'), url(${NotoSansRegular}) format('woff');
    }
`;
