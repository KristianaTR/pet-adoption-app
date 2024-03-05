import { selectDogsData } from "@Store/Reducers/petsReducer";
import * as Styled from "./PetDetailCardTemplate.style";
import { PetDetailCardProps } from "./PetDetailCardTemplate.types";
import { useAppSelector } from "@Store/hooks";
import Heading from "@Components/atoms/Heading";
import Paragraph from "@Components/atoms/Paragraph";
import { FlexContainer } from "../FlexContainerTemplate/FlexContainerTemplate.style";
import { SectionContainer } from "../SectionTemplate/SectionTemplate.style";
import avatarImg from "@/Assets/icons/dog-paw.svg";
import PetDataCard from "@Components/molecules/PetDataCard";
import iconAge from "@/Assets/icons/icon-age.svg";
import iconGender from "@/Assets/icons/icon-gender.svg";
import iconId from "@/Assets/icons/icon-id.svg";
import iconSize from "@/Assets/icons/icon-size.svg";
import iconStatus from "@/Assets/icons/icon-status.svg";
import iconBreed from "@/Assets/icons/icon-breed.svg";
import iconBack from "@/Assets/icons/icon-back.svg";
import iconHeart from "@/Assets/icons/icon-heart.svg";
// import { ReactComponent as iconAge } from "@/Assets/icons/icon-age.svg";
import Carousel from "@Components/organisms/Carousel";
import Slide from "@Components/molecules/Slide";
import Button from "@Components/atoms/Button";
// import iconGender from "@/Assets/icons/icon-gender.svg";

const PetDetailCardTemplate = ({ dogName = "" }: PetDetailCardProps) => {
  const dogsData = useAppSelector(selectDogsData);
  console.log(dogsData);
  console.log(iconAge)

  if (!dogsData) {
    // Handle the case where dogsData is not available yet
    return (
      <SectionContainer>
        <FlexContainer>Loading...</FlexContainer>
      </SectionContainer>
    );
  }

  const currentDog = dogsData.find(
    (dog) => dog.name.toLocaleLowerCase() === dogName.toLocaleLowerCase()
  );

  console.log(currentDog);
  console.log(currentDog?.name);

  if (!currentDog) {
    return (
      <SectionContainer>
        <FlexContainer>
          <Paragraph $larger text="Dog not found" />
        </FlexContainer>
      </SectionContainer>
    );
  }
  const { photos, name, description } = currentDog;
  
  const { age, gender, id, size, status, breeds } = currentDog;

  interface PetDataCardInfoItem {
    key: string;
    value: string | number;
    icon: string;
  }
  
  const petDataCardInfo: PetDataCardInfoItem[] = [
    { key: "Age", value: age, icon: iconAge},
    { key: "Gender", value: gender, icon: iconGender },
    { key: "ID", value: id, icon: iconId },
    { key: "Size", value: size, icon: iconSize },
    { key: "Status", value: status, icon: iconStatus },
    { key: "Breeds", value: breeds?.primary || "Unknown", icon: iconBreed }, 
  ];

  console.log(petDataCardInfo)

  return (
    <Styled.CardWrapper>
      <Styled.CardContainer>
        <Carousel>
          {photos.length > 0 ? (
            photos.map((photo, index) => (
              <Slide key={index} src={photo.full} alt="Dog Image"/>
            ))
          ) : (
            <Slide src={avatarImg} alt="Default Dog Image"/>
          )}
        </Carousel>
        <Styled.DataBlock>
          <Button text="Save this pet" icon={iconHeart}/>
          <Button text="Go back" icon={iconBack}/>
          <Styled.FlexContainer>
            <Styled.DescriptionInfoBox>
              <Heading text={name}></Heading>
              <Paragraph text={description}></Paragraph>
            </Styled.DescriptionInfoBox>
            <Styled.GeneralInfoBox>
              {petDataCardInfo.map((item) => (
                <PetDataCard 
                  key={item.key}
                  icon={item.icon}
                  title={item.key} data={item.value}/>
              ))}
            </Styled.GeneralInfoBox>
          </Styled.FlexContainer>
        </Styled.DataBlock>
      </Styled.CardContainer>
    </Styled.CardWrapper>
  );
};

export default PetDetailCardTemplate;
