import { useMatch, useResolvedPath } from "react-router-dom";
import { Link } from "./NavLink.style";
import { NavLinkProps } from "./NavLink.types";

const NavLink = ({ to, children, ...props }: NavLinkProps) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
      <Link to={to} {...props} className={isActive ? "active" : ""}>
            {children}
      </Link>
    )
};

export default NavLink;
