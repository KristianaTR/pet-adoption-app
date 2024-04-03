import { deviceMax, size } from "Styles/Breakpoints";
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  box-shadow: ${({ theme }) => theme.boxShadow.bottom};
  // box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2); 
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  z-index: 100;

  @media ${deviceMax.laptop} {
    padding: 20px 40px;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${size.laptop};
  margin: auto;
  position: realtive;
`;
