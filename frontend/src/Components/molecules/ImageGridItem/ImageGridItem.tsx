import * as Styled from "./ImageGridItem.style";
import { ImageGridItemProps } from "./ImageGridItem.types";

const ImageGridItem = ({src, alt}: ImageGridItemProps) => {
  return (
    <Styled.GridItem>
      <Styled.GaleryImage src={src} alt={alt} />
    </Styled.GridItem>
  );
};

export default ImageGridItem;
