import { HeadingProps } from './Heading.types';
import { StyledHeading } from './Heading.style';

const Heading = ({text}: HeadingProps) => {
  return (
    <StyledHeading>{text}</StyledHeading>
  )
}

export default Heading