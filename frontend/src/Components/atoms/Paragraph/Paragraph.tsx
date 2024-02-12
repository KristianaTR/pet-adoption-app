import { ParagraphProps } from "./Paragraph.types";
import { StyledParagraph } from "./Paragraph.style";

const Paragraph = ({
  $larger,
  $accent,
  $textAlignCenter,
  children,
}: ParagraphProps) => {
  return (
    <StyledParagraph
      $larger={!!$larger}
      $accent={!!$accent}
      $textAlignCenter={!!$textAlignCenter}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
