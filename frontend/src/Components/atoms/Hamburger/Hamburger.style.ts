import { deviceMax } from 'Styles/Breakpoints';
import styled from 'styled-components';
import { HamburgerProps } from './Hamburger.types';

export const Hamburger = styled.div<HamburgerProps>`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    z-index: 110;

    display: none;

    @media ${deviceMax.mobileLandscape} {
        display: flex;
    }

    // @media ${deviceMax.tablet} {
    //     display: fixed;
    //     padding-top: 10px;
    //     margin-left: 10px;
    //     z-index: 110;
    // }

`;

export const Burger = styled.div<HamburgerProps>`
    width: 2rem;
    height: 0.25rem;
    border-radius: 5px;
    // margin-bottom: 4px;
    background-color: ${({ theme }) => theme.colors.textDark};
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
        transform: ${({ isOpen }) => (isOpen ? 'translateX(100%)' : 'translateX(0)')};
        opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
`;