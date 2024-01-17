import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
//   max-height: 300px;
//   min-height: 300px;
    box-sizing:border-box;
    padding: 24px;
  overflow-y: hidden;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  // margin: 40px;
  cursor: pointer;
  &:hover {
    ${({ theme }) => theme.boxShadow.hover};
  }
  &:active {
    transform: scale(0.96);
  }
`;