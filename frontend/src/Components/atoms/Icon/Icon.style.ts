import styled from "styled-components";
import { IconProps } from "./Icon.types";

export const StyledIcon = styled.svg<IconProps>`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  fill: ${(props) => props.color || "#2d2a2d"};

  path {
    transition: fill 0.3s ease; // Add a smooth transition
  }

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.accent};
    }
  }
`;
