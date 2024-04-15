import { deviceMax } from "Styles/Breakpoints";
import styled from "styled-components";

export const NavLogo = styled.div`
  cursor: pointer;

  &:active {
    transform: scale(0.96);
    text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  }

  svg {
    height: 50px;
    width: 50px;

    @media ${deviceMax.mobileLandscape} {
      height: 40px;
      width: 40px;
    }
  }
`;
