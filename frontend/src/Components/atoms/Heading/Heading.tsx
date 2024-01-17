import styled from 'styled-components';
import { HeadingProps } from './Heading.types';

const StyledHeading = styled.h1`
  font-size: 28px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.accent};
  color: ${({ theme }) => theme.colors.textDark};
`;

const Heading = ({text}: HeadingProps) => {
  return (
    <StyledHeading>{text}</StyledHeading>
  )
}

export default Heading