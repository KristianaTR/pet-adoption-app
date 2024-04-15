import { keyframes } from "styled-components";

// export const slideIn = keyframes`
//   from {
//     transform: scale(1.15) translateY(0);
//     opacity: 0;
//   }
//   to {
//     transform: scale(1) translateY(0);
//     opacity: 1;
//   }
// `;

// export const slideOut = keyframes`
//   from {
//     transform: scale(1) translateY(0);
//     opacity: 1;
//   }
//   to {
//     transform: scale(1.15) translateY(0);
//     opacity: 0;
//   }
// `;

export const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const slideOut = keyframes`
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  50% {
    transform: translateY(50%);
    opacity: 0.5;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

