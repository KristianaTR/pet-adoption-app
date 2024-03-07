import { DefaultTheme } from "styled-components";

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
    iconAccent: "#d02f06",
  },
  fonts: {
    main: "Roboto, sans-serif",
    accent: "Shadows Into Light, cursive",
  },
  boxShadow: {
    default: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    hover: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    bottom: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    minimal: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
  },
  fontSize: {
    small: "12px",
    normal: "16px",
    larger: "22px",
    largest: "30px"
  }
};

export default theme;
