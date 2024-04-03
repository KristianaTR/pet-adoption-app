import Button from '@Components/atoms/Button';
import { Link } from '@Components/atoms/NavLink/NavLink.style';
import { deviceMax } from 'Styles/Breakpoints';
import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media ${deviceMax.mobileLandscape} {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  flex: 0.5;


  li {
    list-style: none;
    font-family: ${({ theme }) => theme.fonts.accent}, sans-serif;

    // ${Link} {
    //   margin: 10px;
    // }
  }
`;

export const LoginBtn = styled(Button)`
  padding: 0;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundWhite};
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;