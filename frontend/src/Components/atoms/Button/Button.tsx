import { StyledButton, ButtonIcon } from "./Button.style";
import { ButtonProps } from "./Button.types";
import Image from "@Components/atoms/Image";

const Button = ({ text, icon, onClick, className }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {icon && <ButtonIcon src={icon} alt=""/>}
      {text}
    </StyledButton>
  )
};

export default Button;
