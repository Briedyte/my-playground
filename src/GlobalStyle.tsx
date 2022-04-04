import { createGlobalStyle } from "styled-components";
import { baseFontSize, ColorPalette } from "./config/style";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html, body, #root {
    height: 100%;
    font-size: ${baseFontSize};
    color: ${ColorPalette.text};
},
`;

export default GlobalStyle;
