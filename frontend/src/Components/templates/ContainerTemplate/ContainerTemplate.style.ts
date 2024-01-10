import styled from "styled-components";

interface StyledContainerProps {
  flexDirection?: string;
}

export const Container = styled.section<StyledContainerProps>`
  display: flex;
  flex-wrap: ${(props) => (props.flexDirection === "column" ? "nowrap" : "wrap")};
  flex-direction: ${props => props.flexDirection || "row"};
  align-items: center;
  padding: 20px;
//   background-color: var(--background-white);
`;