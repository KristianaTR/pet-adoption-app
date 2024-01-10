import styled from 'styled-components';
import { ImageProps } from './Image.types';

const DefaultImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Image = ({ src, alt }: ImageProps) => {
  return (
    <DefaultImage src={src} alt={alt} />
  )
}

export default Image