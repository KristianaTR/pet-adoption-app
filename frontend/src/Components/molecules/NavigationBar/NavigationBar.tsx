import styled from "styled-components";
// import Image from "@atoms/Image";
import Button from "@Components/atoms/Button";
// import "./NavigationBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavLogo = styled.div`
  img {
    height: 40px;
    width: auto;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  padding: 0;

  li {
    list-style: none;
    font-family: ${({ theme }) => theme.fonts.main};

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

const UserActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 4px;
  }
`;

const NavigationBar = () => {
  const navigation = [
    { name: "Home", path: "/", current: true },
    { name: "About", path: "/about", current: false },
    { name: "Adopt", path: "/adopt", current: false },
  ];

  return (
    <NavigationWrapper>
      <NavLogo>
        <img src="/Images/logo.svg" alt="logo-img" />
      </NavLogo>
      <NavList>
        {navigation.map((item) => (
          <li key={item.name}>
            <CustonLink to={item.path}> {item.name} </CustonLink>
          </li>
        ))}
      </NavList>
      <UserActionContainer>
        <Button text="Sign In"></Button>
      </UserActionContainer>
    </NavigationWrapper>
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
