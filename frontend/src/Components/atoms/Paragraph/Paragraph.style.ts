import styled from "styled-components";
import { ParagraphProps } from "./Paragraph.types";
import { deviceMax } from "Styles/Breakpoints";

export const StyledParagraph = styled.p<ParagraphProps>`
  font-size: ${({ $large, theme }) =>
    $large ? theme.fontSize.large : theme.fontSize.normal};
  line-height: 1.5;
  color: ${({ $accent, theme }) =>
    $accent ? theme.colors.textWhite : theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.main}, sans-serif;
  text-align: ${({ $textAlignCenter }) =>
    $textAlignCenter ? "center" : "initial"};

  @media ${deviceMax.laptop} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
