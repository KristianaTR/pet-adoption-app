import Paragraph from "@Components/atoms/Paragraph";
import * as Styled from "./PetDataCard.style";
import { PetDataCardProps } from "./PetDataCard.types";
import Heading from "@Components/atoms/Heading";

const PetDataCard = ({ icon, title, data }: PetDataCardProps) => {
  return (
    <Styled.CardContainer>
      <Styled.CardImage src={icon} alt="icon" />
      <Heading text={title}/>
      <Paragraph text={data}/>
    </Styled.CardContainer>
  );
};

export default PetDataCard;
