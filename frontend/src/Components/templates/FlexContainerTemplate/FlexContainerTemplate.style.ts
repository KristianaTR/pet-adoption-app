import styled from "styled-components";
import { ContainerProps } from "./FlexContainerTemplate.types";

export const FlexContainer = styled.section<ContainerProps>`
  display: flex;
  flex-wrap: ${({ flexDirection }) =>
    flexDirection === "column" ? "nowrap" : "wrap"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
`;
