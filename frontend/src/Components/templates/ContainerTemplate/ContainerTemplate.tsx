import styled from "styled-components";
import { ContainerProps } from "./ContainerTemplate.types";

interface StyledContainerProps {
  flexDirection?: string;
}

const Container = styled.section<StyledContainerProps>`
  display: flex;
  flex-wrap: ${(props) => (props.flexDirection === "column" ? "nowrap" : "wrap")};
  flex-direction: ${props => props.flexDirection || "row"};
  align-items: center;
  padding: 20px;
//   background-color: var(--background-white);
`;

const ContainerTemplate = ({ children }: ContainerProps) => {
  return <Container>{children}</Container>;
};

export default ContainerTemplate;
