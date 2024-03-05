import styled from 'styled-components';
import { ImageProps } from './Image.types';

const DefaultImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Image = ({ src, alt, className }: ImageProps) => {
  return (
    <DefaultImage src={src} alt={alt} className={className}/>
  )
}

export default Image