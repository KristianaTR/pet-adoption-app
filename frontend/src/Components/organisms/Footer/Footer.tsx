import * as Styled from "./Footer.style";
import NavLink from "@Components/atoms/NavLink";

export interface NavigationRoute {
    name: string;
    path: string;
    current: boolean;
}

const Footer = () => {

    const navigationRoutes: NavigationRoute[] = [
        { name: "Contact Us", path: "/comingSoon", current: false },
        { name: "Donate", path: "/comingSoon", current: false },
        { name: "Privacy Policy", path: "/comingSoon", current: false },
    ];

  return (
    <Styled.Footer>
        <Styled.NavList>
            {navigationRoutes.map((item) => (
            <li key={item.name}>
                <NavLink to={item.path}>{item.name}</NavLink>
            </li>
            ))}
        </Styled.NavList>
        <Styled.SocialMediaWrapper>
            <Styled.SocialMediaIcon variant="socialMedia" icon="facebook"/>
            <Styled.SocialMediaIcon variant="socialMedia" icon="linkedin"/>
            <Styled.SocialMediaIcon variant="socialMedia" icon="instagram"/>
            <Styled.SocialMediaIcon variant="socialMedia" icon="x"/>
            <Styled.SocialMediaIcon variant="socialMedia" icon="youtube"/>
        </Styled.SocialMediaWrapper>
        <Styled.CopyrightNotice text="@2024 My Learning Project"/>
    </Styled.Footer>
  )
}

export default Footer