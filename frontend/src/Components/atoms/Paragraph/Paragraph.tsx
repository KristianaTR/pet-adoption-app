import styled, { css } from "styled-components";
import { ParagraphProps } from "./Paragraph.types";

const StyledParagraph = styled.p<{ $accent?: boolean }>`
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-dark);
  font-family: var(--typography-text-font-family);

  ${(props) =>
    props.$accent &&
    css`
      color: var(--text-grey);
    `};
`;

const Paragraph = ({ text }: ParagraphProps) => {
  return <StyledParagraph>{text}</StyledParagraph>;
};

export default Paragraph;
