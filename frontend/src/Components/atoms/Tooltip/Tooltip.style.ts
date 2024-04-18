import styled from "styled-components";
import { deviceMax } from "Styles/Breakpoints";

export const TooltipContainer = styled.span`
  position: relative;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;

  &:hover > .tip {
    display: inline-block;
  }

  & > .tip {
    display: none;
    position: absolute;

    background: ${({ theme }) => theme.colors.backgroundWhite};
    opacity: 0.9;
    border-radius: 5px;
    top: -100%; 
    left: 50%; 
    transform: translate(-50%, -50%); 

    color: ${({ theme }) => theme.colors.textGrey};
    font-family: ${({ theme }) => theme.fonts.main}, sans-serif;
    font-size: ${({ theme }) => theme.fontSize.normal};
    padding: 12px 8px;
    width: 100%;
    min-width: 100px;
 
    @media ${deviceMax.laptop} {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }

  // & > .tip::after {
  //   content: "";
  //   position: absolute;
  //   opacity: 0.9;
  //   top: -10px;
  //   left: 50%;
  //   margin-left: -5px;
  //   border-width: 5px;
  //   border-style: solid;
  //   border-color: transparent transparent ${({ theme }) => theme.colors.backgroundWhite} transparent;
  // }
`;
