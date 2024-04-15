import { deviceMax } from "Styles/Breakpoints";
import styled from "styled-components";

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.extraExtraLarge};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.accent}, sans-serif;
  color: ${({ theme }) => theme.colors.textDark};
  margin: revert;

  @media ${deviceMax.laptop} {
    font-size: ${({ theme }) => theme.fontSize.extraLarge};
  }
`;
