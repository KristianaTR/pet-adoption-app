import Button from "@Components/atoms/Button";
import { ButtonIcon } from "@Components/atoms/Button/Button.style";
import Input from "@Components/atoms/Input";
import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 4px;
`;

export const SearchInputStyled = styled(Input)`
  &:focus {
    ${SearchInputWrapper} {
        box-shadow: ${({ theme }) => theme.boxShadow.minimal};
    }
  }
`;

export const SearchBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  padding: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundWhite};
  }
  ${ButtonIcon} {
    margin: 0;
  }
`;
