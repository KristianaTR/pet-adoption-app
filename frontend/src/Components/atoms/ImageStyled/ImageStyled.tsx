import styled from "styled-components";
import { ImageProps } from '../Image/Image.types';

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
`;

const ImageStyled = ({ src, alt }: ImageProps) => {
  return <StyledImage src={src} alt={alt} />;
};

export default ImageStyled;
