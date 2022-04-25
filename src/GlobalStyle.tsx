import { createGlobalStyle } from "styled-components";
import {
  baseFontSize,
  ColorPalette,
  FontFamily,
  FontWeight,
} from "./config/style";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


html, body, #root {
    font-size: ${baseFontSize};
    height: 100%;
}

body {  
    background: ${ColorPalette.backgroundSolidLighter};
}

p, label, input, span, li {
    color: ${ColorPalette.black};
    font-family: ${FontFamily.nunito};
    font-weight: ${FontWeight.regular};
}
h1, h2, h3, h4, h5, h6 {
    font-family: ${FontFamily.teko};
    font-weight: ${FontWeight.regular};
    line-height: 2.6rem;
}
a {
    text-decoration: none;
}
`;

export default GlobalStyle;
