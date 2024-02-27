import * as Styled from "./NavigationBar.style";
// import Image from "@atoms/Image";
import Button from "@Components/atoms/Button";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


const NavigationBar = () => {
  const navigation = [
    { name: "Home", path: "/", current: true },
    { name: "About", path: "/about", current: false },
    { name: "Adopt", path: "/adopt", current: false },
  ];

  return (
    <Styled.NavigationWrapper>
      <Styled.NavLogo>
        <img src="/Images/logo.svg" alt="logo-img" />
      </Styled.NavLogo>
      <Styled.NavList>
        {navigation.map((item) => (
          <li key={item.name}>
            <CustonLink to={item.path}> {item.name} </CustonLink>
          </li>
        ))}
      </Styled.NavList>
      <Styled.UserActionContainer>
        <Button text="Sign In"></Button>
      </Styled.UserActionContainer>
    </Styled.NavigationWrapper>
  );
};

function CustonLink({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} {...props} className={isActive ? "active" : ""}>
      {children}
    </Link>
  );
}

export default NavigationBar;
