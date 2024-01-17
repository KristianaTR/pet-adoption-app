import { createGlobalStyle } from "styled-components";
import fontsCss from './fonts.module.css'

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0 auto;
        padding: 0;
        width: 100vw;
        height: 100vh;
    },
    ${fontsCss},
`;
