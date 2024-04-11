import { deviceMax } from 'Styles/Breakpoints';
import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 10px 20px 10px 10px;
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-family: ${({ theme }) => theme.fonts.main};
  outline: none;
  color: ${({ theme }) => theme.colors.textGrey};
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.iconAccent}, 
    ${({ theme }) => theme.colors.iconAccent}
  );
  background-position: right bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  transition: all 0.3s ease-in-out;

  @media ${deviceMax.laptop} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
  
  &::placeholder {
    overflow: visible;
  }
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.minimal};
    outline: 0 none;
    background-size: 100% 2px, 100% 1px;
  }
  &:focus::before {
    width: 100%;
  }
`;