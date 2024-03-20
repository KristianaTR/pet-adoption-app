import { PetGridProps } from './PetGridTemplate.types';
import { StyledPetGridTemplate } from './PetGridTemplate.style';


const PetGridTemplate = ({children}:PetGridProps) => {
  return (
    <StyledPetGridTemplate>{children}</StyledPetGridTemplate>
  )
}

export default PetGridTemplate