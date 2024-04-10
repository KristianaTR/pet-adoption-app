import { StyledInput } from './Input.style'
import { InputProps } from './Input.types'

const Input = ({type, placeholder, onChange, className}: InputProps) => {
  return (
    <StyledInput 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange}
        className={className}
    />
  )
}

export default Input