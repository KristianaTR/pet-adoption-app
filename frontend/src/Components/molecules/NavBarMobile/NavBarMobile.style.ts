import { Link } from '@Components/atoms/NavLink/NavLink.style';
import styled, { css } from 'styled-components';
import { NavBarMobileProps } from './NavBarMobile.types';
import { deviceMax } from 'Styles/Breakpoints';
import Button from '@Components/atoms/Button';
import { slideIn, slideOut } from 'Styles/Keyframes';

export const NavBar = styled.div`
  display: none;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  
  @media ${deviceMax.mobileLandscape} {
    display: flex;
  }
`;

export const NavListMobile = styled.ul<NavBarMobileProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 0 0;
  margin: 0;
  position: absolute;
  background-color:  ${({ theme }) => theme.colors.backgroundWhite};
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(251,249,249,0.927608543417367) 80%, rgba(247,248,249,0.5214460784313726) 100%);
  box-shadow: ${({ theme }) => theme.boxShadow.bottom};
  width: 100vw;
  height: 50vh;
  top: 84px;
  right: 0;
  list-style: none;

  animation: ${({ isOpen })  => isOpen ? 
    css ` ${slideIn} 0.5s ease-in-out forwards` : 
    css ` ${slideOut} 0.5s ease-in-out forwards` 
  };

 
  // animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.5s ease-in-out forwards;


  li {
    font-family: ${({ theme }) => theme.fonts.accent}, sans-serif;
    border-bottom: 2px solid #eceff2;
    width: 100%;
    text-align: center;

    ${Link} {
      margin: 10px;
    }
  }
`;

export const UserActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
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