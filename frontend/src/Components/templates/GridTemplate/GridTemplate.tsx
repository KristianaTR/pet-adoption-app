import { GridProps } from './GridTemplate.types';
import { StyledGridTemplate } from './GridTemplate.style';


const GridTemplate = ({children}:GridProps) => {
  return (
    <StyledGridTemplate>{children}</StyledGridTemplate>
  )
}

export default GridTemplate