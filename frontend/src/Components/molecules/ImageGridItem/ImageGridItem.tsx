import * as Styled from "./ImageGridItem.style";
import { ImageGridItemProps } from "./ImageGridItem.types";

const ImageGridItem = ({onClick, src, alt}: ImageGridItemProps) => {
  return (
    <Styled.GridItem onClick={onClick}>
      <Styled.GaleryImage src={src} alt={alt} />
    </Styled.GridItem>
  );
};

export default ImageGridItem;
