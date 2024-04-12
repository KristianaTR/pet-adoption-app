import styled from "styled-components";
import Icon from "../Icon";
import { pulse } from "../Icon/Icon.style";
import { deviceMax } from "Styles/Breakpoints";


export const ButtonIcon = styled(Icon)`
  margin-right: 10px;

  @media ${deviceMax.laptop} {
    width: 20px;
    height: 20px;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.normal};
  background-color: ${({ theme }) => theme.colors.buttonDefault};
  color: ${({ theme }) => theme.colors.textWhite};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main}, sans-serif;
  width: fit-content;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.textDark};
    ${ButtonIcon} {
      color: ${({ theme }) => theme.colors.accent};
      animation: ${pulse} 750ms infinite alternate;
    }
  }

  &:active {
    transform: scale(0.96);
    // font-weight: 600;
  }

  @media ${deviceMax.laptop} {
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

