import styled from 'styled-components';
import { HeadingProps } from './Heading.types';

const StyledHeading = styled.h1`
  font-size: 28px;
  font-weight: bold;
  font-family: var(--typography-accent-font-family);
  color: var(--text-dark);
`;

const Heading = ({text}: HeadingProps) => {
  return (
    <StyledHeading>{text}</StyledHeading>
  )
}

export default Heading