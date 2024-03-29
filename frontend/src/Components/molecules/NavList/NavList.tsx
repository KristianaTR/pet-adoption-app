import NavLink from "@Components/atoms/NavLink";
import * as Styled from "./NavList.style"

const NavList = () => {
    const navigationRoutes = [
        { name: "Home", path: "/", current: true },
        { name: "About", path: "/about", current: false },
        { name: "Adopt", path: "/adopt", current: false },
    ];

  return (
    <Styled.NavList>
        {navigationRoutes.map((item) => (
            <li key={item.name}>
                <NavLink to={item.path}>
                    {item.name}
                </NavLink>
            </li>
        ))}
    </Styled.NavList>
  )
}

export default NavList