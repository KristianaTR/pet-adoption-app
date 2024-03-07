import { PetCardProps } from "./PetCardTemplate.types";
import * as Styled from "./PetCardTemplate.style";

const PetCardTemplate = ({ linkTo, children, imageUrl}: PetCardProps) => {
  return (
    <Styled.CardWrapper>
      <Styled.StyledLink to={linkTo}>
        <Styled.CardContainer>
          <Styled.CardBackground />
          <Styled.CardImage imageUrl={imageUrl} />
          <Styled.CardTextBox>{children}</Styled.CardTextBox>
        </Styled.CardContainer>
      </Styled.StyledLink>
    </Styled.CardWrapper>
  );
};

export default PetCardTemplate;
