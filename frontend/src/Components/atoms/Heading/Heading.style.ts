import styled from "styled-components";

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.largest};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.accent}, sans-serif;
  color: ${({ theme }) => theme.colors.textDark};
`;
