import { ParagraphProps } from "./Paragraph.types";
import { StyledParagraph } from "./Paragraph.style";

const Paragraph = ({
  $larger,
  $accent,
  $textAlignCenter,
  text,
  className
}: ParagraphProps) => {
  return (
    <StyledParagraph
      $larger={!!$larger}
      $accent={!!$accent}
      $textAlignCenter={!!$textAlignCenter}
      className={className}
    >
      {text}
    </StyledParagraph>
  );
};

export default Paragraph;
