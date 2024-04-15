import { ParagraphProps } from "./Paragraph.types";
import { StyledParagraph } from "./Paragraph.style";

const Paragraph = ({
  $large,
  $accent,
  $textAlignCenter,
  text,
  className
}: ParagraphProps) => {
  return (
    <StyledParagraph
      $large={!!$large}
      $accent={!!$accent}
      $textAlignCenter={!!$textAlignCenter}
      className={className}
    >
      {text}
    </StyledParagraph>
  );
};

export default Paragraph;
