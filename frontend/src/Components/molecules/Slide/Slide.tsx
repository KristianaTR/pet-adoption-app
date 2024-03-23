import { SlideContainer, SlideImage } from './Slide.style';
import { SlideProps } from './Slide.types';

const Slide = ({src, alt}: SlideProps) => {
  return (
    <SlideContainer>
      <SlideImage src={src} alt={alt}/>
    </SlideContainer>
  )
}

export default Slide