
import * as Styled from "./PetDataCard.style";
import { PetDataCardProps } from "./PetDataCard.types";

const PetDataCard = ({ icon, title, data }: PetDataCardProps) => {
  return (
    <Styled.CardContainer>
      <Styled.CardIcon icon={icon}/>
      <Styled.CardHeading text={title}/>
      <Styled.CardParagraph text={data}/>
    </Styled.CardContainer>
  );
};

export default PetDataCard;
