import styled from "styled-components";
import { ParagraphProps } from "./Paragraph.types";

export const StyledParagraph = styled.span<ParagraphProps>`
  font-size: ${({ $larger, theme }) =>
    $larger ? theme.fontSize.larger : theme.fontSize.normal};
  line-height: 1.5;
  color: ${({ $accent, theme }) =>
    $accent ? theme.colors.textWhite : theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.main}, sans-serif;
  text-align: ${({ $textAlignCenter }) =>
    $textAlignCenter ? "center" : "initial"};
`;
