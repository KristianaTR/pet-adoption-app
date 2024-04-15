import Heading from "@Components/atoms/Heading";
import Icon from "@Components/atoms/Icon";
import { Link } from '@Components/atoms/NavLink/NavLink.style';
import { deviceMax } from "Styles/Breakpoints";
import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.backgroundWhite};
    box-shadow: ${({ theme }) => theme.boxShadow.top};
    padding: 20px;
    width: 100%;
    `;
    
    export const NavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    @media ${deviceMax.mobileS} {
        flex-direction: column;
        gap: 0;
        margin-bottom: 15%;
    }
  
  li {
    font-family: ${({ theme }) => theme.fonts.accent}, sans-serif;
    ${Link} {
        font-size: ${({ theme }) => theme.fontSize.large};
        @media ${deviceMax.mobileL} {
            font-size: ${({ theme }) => theme.fontSize.normal};
        }
        @media ${deviceMax.mobileS} {
            margin: 0;
        }
    }
    @media ${deviceMax.mobileS} {
        list-style: none;
    }
  }

  li:first-child {
    list-style: none;
  }

`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export const SocialMediaIcon = styled(Icon)`
  cursor: pointer;
  &:active {
    transform: scale(0.96);
  }
`;

export const CopyrightNotice = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.normal};
`;