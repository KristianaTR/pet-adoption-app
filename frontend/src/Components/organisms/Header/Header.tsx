import { NavigationWrapper, StyledHeader } from "./Header.style";
import NavBarMobile from "@Components/molecules/NavBarMobile";
import NavBarDesktop from "@Components/molecules/NavBarDesktop";
export interface NavigationRoute {
  name: string;
  path: string;
  current: boolean;
}

const Header = () => {

  const navigationRoutes: NavigationRoute[] = [
    { name: "Home", path: "/", current: true },
    { name: "About", path: "/about", current: false },
    { name: "Adopt", path: "/adopt", current: false },
  ];

  return (
    <StyledHeader>
      <NavigationWrapper>
        <NavBarDesktop navigationRoutes={navigationRoutes}/>
        <NavBarMobile navigationRoutes={navigationRoutes} />
      </NavigationWrapper>
    </StyledHeader>
  );
};

export default Header;
