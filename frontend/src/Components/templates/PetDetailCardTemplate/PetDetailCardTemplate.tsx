import { selectDogsData } from "@Store/Reducers/petsReducer";
import * as Styled from "./PetDetailCardTemplate.style";
import { PetDetailCardProps } from "./PetDetailCardTemplate.types";
import { dogDataTypes } from "@Components/organisms/SectionDogs/SectionDogs.types";
import { useAppSelector } from "@Store/hooks";
import Heading from "@Components/atoms/Heading";
import Paragraph from "@Components/atoms/Paragraph";
import { FlexContainer } from "../FlexContainerTemplate/FlexContainerTemplate.style";
import { SectionContainer } from "../SectionTemplate/SectionTemplate.style";
import avatarImg from "@/Assets/icons/dog-paw.svg";
import PetDataCard from "@Components/molecules/PetDataCard";
import iconAge from "@/Assets/icons/icon-age.svg";
// import { ReactComponent as iconAge } from "@/Assets/icons/icon-age.svg";
import Icon from "@Components/atoms/Icon";
import { ReactNode } from "react";
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
    { key: "Gender", value: gender, icon: iconAge },
    { key: "ID", value: id, icon: iconAge },
    { key: "Size", value: size, icon: iconAge },
    { key: "Status", value: status, icon: iconAge },
    { key: "Breeds", value: breeds?.primary || "Unknown", icon: iconAge }, 
  ];

  console.log(petDataCardInfo)

  return (
    <Styled.CardWrapper>
      <Styled.CardContainer>
        <Styled.PhotoBlock>
          {photos.length > 0 ? (
            photos.map((photo, index) => (
              <Styled.Img key={index} src={photo.full} alt="Dog Image" />
            ))
          ) : (
            <Styled.Img src={avatarImg} alt="Default Dog Image" />
          )}
        </Styled.PhotoBlock>
        <Styled.DataBlock>
          <Styled.DescriptionInfoBox>
            <Heading text={name}></Heading>
            <Paragraph text={description}></Paragraph>
          </Styled.DescriptionInfoBox>
          <Styled.GeneralInfoBox>
            {petDataCardInfo.map((item) => (
              <PetDataCard 
                key={item.key}
                icon={item.icon}
                // icon={<Icon alt="heart icon" color="#ffffff">{item.icon}</Icon>}
                title={item.key} data={item.value}/>
            ))}
          </Styled.GeneralInfoBox>
        </Styled.DataBlock>
      </Styled.CardContainer>
    </Styled.CardWrapper>
  );
};

export default PetDetailCardTemplate;
