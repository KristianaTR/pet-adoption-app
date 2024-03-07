import styled, { keyframes } from "styled-components";
import { IconProps } from "./Icon.types";

export const StyledIcon = styled.svg<IconProps>`
  width: ${(props) => props.width || "30px"};
  height: ${(props) => props.height || "30px"};
  color: ${(props) => props.color || "#2d2a2d"};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    // transform: scale(1.15);
    // transform: rotate(45deg);
  }
`;

export const pulse = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.15);
  }
`;