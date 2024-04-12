import { keyframes } from "styled-components";

export const slideIn = keyframes`
  from {
    transform: scale(1.15) translateY(0);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

export const slideOut = keyframes`
  from {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  to {
    transform: scale(1.15) translateY(0);
    opacity: 0;
  }
`;



