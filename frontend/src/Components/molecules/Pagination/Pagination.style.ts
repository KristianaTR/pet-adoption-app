import Button from "@Components/atoms/Button";
import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  border: 1px solid #fff;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;
  border-radius: 8px;
`;

export const PaginationBtn = styled(Button)`
  &.active {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.textDark};
  }
`;
