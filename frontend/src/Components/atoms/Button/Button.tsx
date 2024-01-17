import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.buttonDefault};
  color: ${({ theme }) => theme.colors.textWhite};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.textDark};
  }

  &:active {
    transform: scale(0.96);
  }
`;

const Button = ({ text, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
