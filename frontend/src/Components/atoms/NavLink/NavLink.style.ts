import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.fontSize.largest};
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
  position: relative;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.iconAccent},
    ${({ theme }) => theme.colors.iconAccent} 50%,
    #000 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;

  // &:before {
  //   content: '';
  //   background: ${({ theme }) => theme.colors.iconAccent};
  //   display: block;
  //   position: absolute;
  //   bottom: -3px;
  //   left: 0;
  //   width: 0;
  //   height: 3px;
  //   transition: all 0.3s ease-in-out;
  // }

  &:hover {
    background-position: 0;
  }

  &:hover::before {
    width: 100%;
  }

  &:active {
    transform: scale(0.96);
  }
`;