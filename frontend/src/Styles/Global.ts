import { createGlobalStyle } from "styled-components";
import fontsCss from "./fonts.module.css";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    },

    body {
        margin: 0 auto;
        padding: 0;
        width: 100vw;
        min-height: 100vh;
    },
    ${fontsCss},
`;
