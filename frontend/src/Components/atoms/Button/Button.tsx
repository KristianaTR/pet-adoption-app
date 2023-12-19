import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--button-default);
  color: var(--text-white);
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--button-hover);
    color: var(--text-dark);
  }

  &:active {
    transform: scale(0.96);
  }
`;

const Button = ({ text, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
