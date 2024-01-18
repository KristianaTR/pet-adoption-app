import styled from "styled-components";
import { ParagraphProps } from "./Paragraph.types";

const StyledParagraph = styled.p<{ $accent?: boolean, $textAlignCenter: boolean }>`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ $accent, theme }) => ($accent ? theme.colors.textWhite : theme.colors.textDark)};
  font-family: ${({ theme }) => theme.fonts.main}, sans-serif;
  text-align: ${({ $textAlignCenter}) => ($textAlignCenter ? 'center' : 'initial')};

`;

const Paragraph = ({ text, $accent,  $textAlignCenter }: ParagraphProps) => {
  return <StyledParagraph $accent={!!$accent} $textAlignCenter={!!$textAlignCenter}>{text}</StyledParagraph>;
};

export default Paragraph;