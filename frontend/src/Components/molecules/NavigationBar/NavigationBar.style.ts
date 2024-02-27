import styled from "styled-components";


export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NavLogo = styled.div`
  img {
    height: 40px;
    width: auto;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  padding: 0;

  li {
    list-style: none;
    font-family: ${({ theme }) => theme.fonts.main}, sans-serif;

    &.active {
      font-weight: bold;
    }

    a {
      display: inline-block;
      color: ${({ theme }) => theme.colors.textDark};;
      font-size: 20px;
      margin: 0 10px;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

export const UserActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 4px;
  }
`;