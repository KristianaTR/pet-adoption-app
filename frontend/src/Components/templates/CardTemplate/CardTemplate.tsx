import { CardProps } from './CardTemplate.types';
import * as Styled from './CardTemplate.style';


const CardTemplate = ({ linkTo, children }: CardProps) => {
  return (
    <Styled.StyledLink to={linkTo}>
      <Styled.CardContainer>{children}</Styled.CardContainer>
    </Styled.StyledLink>
  );
};

export default CardTemplate;