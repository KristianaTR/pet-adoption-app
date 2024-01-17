import styled from "styled-components";
// import { HeaderProps } from "./Header.types";
import NavigationBar from "@Components/molecules/NavigationBar";

const StyledHeader = styled.header`
  position: fixed;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  box-shadow: ${({ theme }) => theme.boxShadow.bottom};
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  z-index: 1000;
`;

const Header = () => {
  return (
    <StyledHeader>
      <NavigationBar />
    </StyledHeader>
  );
};

export default Header;
