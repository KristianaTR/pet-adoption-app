import Button from "@Components/atoms/Button";
import * as Styled from "./Lightbox.style";
import { LightboxProps } from "./Lightbox.types";

const Lightbox = ({
  onClick,
  onPrevClick,
  onNextClick,
  src,
  alt,
}: LightboxProps) => {

return (
    <Styled.LightboxBackground onClick={onClick}>
      <Styled.LightboxBody>
        <Button text="&#10218;" onClick={onPrevClick} />
        <Styled.LightboxImage src={src} alt={alt} />
        <Button text="&#10219;" onClick={onNextClick} />
      </Styled.LightboxBody>
    </Styled.LightboxBackground>
  );
};

export default Lightbox;
