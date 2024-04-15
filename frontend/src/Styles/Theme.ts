import { DefaultTheme } from "styled-components";
import * as Keyframes from "./Keyframes";

const theme: DefaultTheme = {
  colors: {
    textDark: "#2d2a2d",
    textGrey: "#706c6c",
    textWhite: "#ffffff",
    backgroundWhite: "#ffffff",
    backgroundLight: "#eceff2",
    backgroundDark: "#aea69f",
    accent: "#66574b",
    buttonDefault: " #66574b",
    buttonHover: "#aea69f",
    iconDefault: "#2d2a2d",
    iconAccent: "#c27967",
  },
  fonts: {
    main: "Roboto, sans-serif",
    accent: "Shadows Into Light, cursive",
  },
  boxShadow: {
    default: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    hover: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    bottom: "rgba(0, 0, 0, 0.24) 0px 8px 8px -1px",
    top: "rgba(0, 0, 0, 0.24) 0px -8px 8px -1px",
    minimal: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
  },
  fontSize: {
    small: "12px",
    normal: "16px",
    large: "22px",
    extraLarge: "30px",
    extraExtraLarge: "50px",
    superLarge: "80px",
  },
  animations: {
    slideIn: Keyframes.slideIn,
    slideOut: Keyframes.slideOut,
  },
};

export default theme;
