import { Link } from '@Components/atoms/NavLink/NavLink.style';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    font-family: ${({ theme }) => theme.fonts.accent}, sans-serif;
    // font-size: ${({ theme }) => theme.fontSize.larger};

    &.active {
      font-weight: bold;
    }

    // ${Link} {
    //   margin: 0 10px;
    // }
  }
`;