import { device } from "Styles/Breakpoints";
import styled from "styled-components";

export const StyledGridTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // grid-template-rows: repeat(auto-fill, 360px);
  gap: 20px;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

`;