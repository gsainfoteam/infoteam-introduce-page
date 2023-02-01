import { createGlobalStyle } from "styled-components";
import NotoSansRegular from "./NotoSansKR-Regular.woff";
import OpenSansRegular from "./OpenSans-Regular.ttf";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'NotoSansRegular';
        src: url(${NotoSansRegular}) format('woff');
    }
    @font-face {
        font-family: 'OpenSansRegular';
        src: url(${OpenSansRegular}) format('ttf');
    }
`;

export default FontStyles;
