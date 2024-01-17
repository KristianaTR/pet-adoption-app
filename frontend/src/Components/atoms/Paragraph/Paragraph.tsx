import styled from "styled-components";
import { ParagraphProps } from "./Paragraph.types";

const StyledParagraph = styled.p<{ $accent?: boolean }>`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ $accent, theme }) => ($accent ? theme.colors.textWhite : theme.colors.textDark)};
  font-family: ${({ theme }) => theme.fonts.main};
  

`;

const Paragraph = ({ text, $accent }: ParagraphProps) => {
  return <StyledParagraph $accent={!!$accent}>{text}</StyledParagraph>;
};

export default Paragraph;