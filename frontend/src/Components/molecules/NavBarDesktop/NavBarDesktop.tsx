import NavLink from "@Components/atoms/NavLink";
import { NavigationRoute } from "@Components/organisms/Header/Header";
import { LoginBtn, NavBar, NavList } from "./NavBarDesktop.style";
import NavLogo from "@Components/atoms/NavLogo";

const NavBarDesktop = ({
  navigationRoutes,
}: {
  navigationRoutes: NavigationRoute[];
}) => {
  return (
    <NavBar>
      <NavLogo />
      <NavList>
        {navigationRoutes.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </NavList>
      <LoginBtn text="" variant="common" icon="login" />
    </NavBar>
  );
};

export default NavBarDesktop;
