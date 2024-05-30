import { StyledInput } from "./Input.style";
import { InputProps } from "./Input.types";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}: InputProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;
