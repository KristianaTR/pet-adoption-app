import { PetCardProps } from './PetCardTemplate.types';
import * as Styled from './PetCardTemplate.style';


const PetCardTemplate = ({ linkTo, children, imageUrl }: PetCardProps) => {
  return (
    <Styled.StyledLink to={linkTo}>
      <Styled.CardWrapper>
        <Styled.CardBackground/>
          <Styled.CardImage imageUrl={imageUrl}/>
          <Styled.CardTextBox>{children}</Styled.CardTextBox>
      {/* <Styled.CardContainer>{children}</Styled.CardContainer> */}
      </Styled.CardWrapper>
    </Styled.StyledLink>
  );
};

export default PetCardTemplate;
