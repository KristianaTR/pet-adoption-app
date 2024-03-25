import * as Styled from "./ImageGrid.style";
import { ImageGridProps } from "./ImageGrid.types";

const ImageGrid = ({ children }: ImageGridProps) => {
  return <Styled.GridGalery>{children}</Styled.GridGalery>;
};

export default ImageGrid;
