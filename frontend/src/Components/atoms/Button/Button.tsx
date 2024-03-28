import { StyledButton, ButtonIcon } from "./Button.style";
import { ButtonProps } from "./Button.types";

const Button = ({ text, variant, icon, onClick, className }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {icon && variant && <ButtonIcon variant={variant} icon={icon}/>}
      {text}
    </StyledButton>
  )
};

export default Button;
