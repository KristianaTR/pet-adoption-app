import styled from "styled-components";
// import { HeaderProps } from "./Header.types";
import NavigationBar from "@Components/molecules/NavigationBar";

const StyledHeader = styled.header`
  position: fixed;
  background: var(--background-white);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
