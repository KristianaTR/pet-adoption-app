import { PetGridProps } from './PetGridTemplate.types';
import { StyledGridTemplate } from './PetGridTemplate.style';


const PetGridTemplate = ({children}:PetGridProps) => {
  return (
    <StyledGridTemplate>{children}</StyledGridTemplate>
  )
}

export default PetGridTemplate