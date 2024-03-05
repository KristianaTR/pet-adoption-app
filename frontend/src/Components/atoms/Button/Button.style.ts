import styled from "styled-components";
import Image from "../Image";

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.buttonDefault};
  color: ${({ theme }) => theme.colors.textWhite};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main}, sans-serif;
  width: fit-content;
  display: flex;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.textDark};
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const ButtonIcon = styled(Image)`
  width: 20px;
  margin-right: 10px;
`;
