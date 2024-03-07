import { StyledButton, ButtonIcon } from "./Button.style";
import { ButtonProps } from "./Button.types";

const Button = ({ text, icon, onClick, className }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {icon && <ButtonIcon icon={icon}/>}
      {text}
    </StyledButton>
  )
};

export default Button;
