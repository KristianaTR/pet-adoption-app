import styled, { css } from "styled-components";
import { ImageProps } from "./Image.types";

interface StyledImageProps {
  styledMode?: boolean;
}

const StyledImage = styled.img<StyledImageProps>`
  ${(props) =>
    props.styledMode
      ? css`
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        `
      : css`
          max-width: 100%;
          height: auto;
        `}
`;

const Image = ({ src, alt, mode }: ImageProps) => {
  return <StyledImage src={src} alt={alt} styledMode={mode === "styled"}/>;
};

export default Image;
