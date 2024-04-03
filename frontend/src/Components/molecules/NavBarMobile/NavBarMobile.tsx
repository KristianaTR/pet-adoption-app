import NavLink from "@Components/atoms/NavLink";
import {LoginBtn, NavBar, NavListMobile, UserActionContainer} from "./NavBarMobile.style"
import { NavigationRoute } from "@Components/organisms/Header/Header";
import Hamburger from "@Components/atoms/Hamburger";
import { useState } from "react";
import NavLogo from "@Components/atoms/NavLogo";

const NavBarMobile = ({ navigationRoutes }: { navigationRoutes: NavigationRoute[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log('Is Open:', isOpen); 
  const toggleHamburger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavBar>
      <NavLogo/>
      <NavListMobile isOpen={isOpen}>
        {navigationRoutes.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path}>
                {item.name}
            </NavLink>
          </li>
        ))}
      </NavListMobile>
      <UserActionContainer>
        <LoginBtn text="" variant="common" icon="login" />
        <Hamburger onClick={toggleHamburger} isOpen={isOpen}/>
      </UserActionContainer>
    </NavBar>
  )
}

export default NavBarMobile