import styled from "styled-components";
import { IconProps } from "./Icon.types";

export const StyledIcon = styled.img<IconProps>`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  fill: ${(props) => props.color || "#2d2a2d"};
`;
