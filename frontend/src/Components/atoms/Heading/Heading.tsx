import styled from 'styled-components';
import { HeadingProps } from './Heading.types';

const StyledHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: var(--text-dark);
`;

const Heading = ({text}: HeadingProps) => {
  return (
    <StyledHeading>{text}</StyledHeading>
  )
}

export default Heading