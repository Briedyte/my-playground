import { createGlobalStyle } from "styled-components";
import {
  baseFontSize,
  ColorPalette,
  FontFamily,
  FontWeight,
  MediaQuery,
  Spacing,
} from "@config/style";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    font-size: 20px;

    ${MediaQuery.s}{
        font-size: 18px;
    }
}


html, body, #root {
    font-size: ${baseFontSize};
    height: 100%;
}

body {  
    background: ${ColorPalette.backgroundSolidLighter};
}

p, label, input, span, li, a, button {
    color: ${ColorPalette.black};
    font-family: ${FontFamily.nunito};
    font-weight: ${FontWeight.regular};
}
p {
    margin: ${Spacing[8]} 0;
}
h1, h2, h3, h4, h5, h6 {
    font-family: ${FontFamily.teko};
    font-weight: ${FontWeight.regular};
    line-height: 2.6rem;
}
a {
    text-decoration: none;
    font-size: 18px;
}

ul {
    list-style: none;
}
`;

export default GlobalStyle;
