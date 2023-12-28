import styled from "styled-components";
import { GridProps } from "./GridTemplate.types";

const StyledGridTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 300px);
  gap: 20px;
`;

const GridTemplate = ({children}:GridProps) => {
  return (
    <StyledGridTemplate>{children}</StyledGridTemplate>
  )
}

export default GridTemplate