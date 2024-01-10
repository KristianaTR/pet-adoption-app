import styled from "styled-components";
import { ImageProps } from '../Image/Image.types';

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ImageStyled = ({ src, alt }: ImageProps) => {
  return <StyledImage src={src} alt={alt} />;
};

export default ImageStyled;
