import { ParagraphProps } from "./Paragraph.types";
import { StyledParagraph } from "./Paragraph.style";

const Paragraph = ({
  $larger,
  $accent,
  $textAlignCenter,
  text,
}: ParagraphProps) => {
  return (
    <StyledParagraph
      $larger={!!$larger}
      $accent={!!$accent}
      $textAlignCenter={!!$textAlignCenter}
    >
      {text}
    </StyledParagraph>
  );
};

export default Paragraph;
