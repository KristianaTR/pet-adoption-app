import styled from "styled-components";
import { ParagraphProps } from "./Paragraph.types";

const StyledParagraph = styled.p<{ $accent?: boolean }>`
  font-size: 16px;
  line-height: 1.5;
  color: ${props => (props.$accent ? 'var(--text-white)' : 'var(--text-dark)')};
  font-family: var(--typography-text-font-family);

`;

const Paragraph = ({ text, $accent }: ParagraphProps) => {
  return <StyledParagraph $accent={!!$accent}>{text}</StyledParagraph>;
};

export default Paragraph;