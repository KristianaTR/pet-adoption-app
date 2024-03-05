import { HeadingProps } from './Heading.types';
import { StyledHeading } from './Heading.style';

const Heading = ({text, className}: HeadingProps) => {
  return (
    <StyledHeading className={className}>{text}</StyledHeading>
  )
}

export default Heading