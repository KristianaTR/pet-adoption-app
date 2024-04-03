import * as Styled from  "./Hamburger.style";
import { HamburgerProps } from "./Hamburger.types";

const Hamburger = ({onClick, isOpen}: HamburgerProps) => {
  return (
    <Styled.Hamburger onClick={onClick} isOpen={isOpen}>
        <Styled.Burger isOpen={isOpen}/>
        <Styled.Burger isOpen={isOpen}/>
        <Styled.Burger isOpen={isOpen}/>
    </Styled.Hamburger>
  )
}

export default Hamburger