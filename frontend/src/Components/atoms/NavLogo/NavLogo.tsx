import Icon from "@Components/atoms/Icon";
import { useNavigate } from "react-router-dom";
import * as Styled from "./NavLogo.style";


const NavLogo = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate("/");
    };

  return (
    <Styled.NavLogo onClick={handleGoBack}>
        <Icon variant="common" icon="paw" width="50px" />
    </Styled.NavLogo>
  )
}

export default NavLogo