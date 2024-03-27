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
import Button from "@Components/atoms/Button";
import { IconType } from "@Components/atoms/Icon/Icon.types";
import { useNavigate } from "react-router-dom";
import ImageGrid from "@Components/organisms/ImageGrid";
import ImageGridItem from "@Components/molecules/ImageGridItem";
import { SetStateAction, useState } from "react";
import Lightbox from "@Components/molecules/Lightbox";

const PetDetailCardTemplate = ({ dogName = "" }: PetDetailCardProps) => {
  const dogsData = useAppSelector(selectDogsData);
  console.log(dogsData);

  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const showImage = (image: string) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
    console.log("click");
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    let currentIndex = photos.findIndex((photo) => photo.full === imageToShow);
    // Ensure photo is found and currentIndex is valid
    if (currentIndex !== -1 && currentIndex < photos.length - 1) {
      setImageToShow(photos[currentIndex + 1].full);
    } else {
      setLightBoxDisplay(false);
    }
  };

  //show previous image in lightbox
  const showPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    let currentIndex = photos.findIndex((photo) => photo.full === imageToShow);
    // Ensure photo is found and currentIndex is valid
    if (currentIndex !== -1 && currentIndex > 0) {
      setImageToShow(photos[currentIndex - 1].full);
    } else {
      setLightBoxDisplay(false);
    }
  };

  const navigate = useNavigate();

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
    icon: IconType;
  }

  const petDataCardInfo: PetDataCardInfoItem[] = [
    { key: "Age", value: age, icon: "age" },
    { key: "Gender", value: gender, icon: "gender" },
    { key: "ID", value: id, icon: "id" },
    { key: "Size", value: size, icon: "size" },
    { key: "Status", value: status, icon: "status" },
    { key: "Breeds", value: breeds?.primary || "Unknown", icon: "breed" },
  ];

  console.log(petDataCardInfo);

  const handleGoBack = () => {
    navigate("/dog");
  };

  return (
    <Styled.CardWrapper>
      <Styled.CardContainer>
        <Styled.GaleryBlock>
          <ImageGrid>
            {photos.length > 0 ? (
              photos.map((photo, index) => (
                <ImageGridItem
                  key={index}
                  src={photo.full}
                  alt="Dog Image"
                  onClick={() => showImage(photo.full)}
                />
              ))
            ) : (
              <ImageGridItem
                src={avatarImg}
                alt="Default Dog Image"
                onClick={() => showImage(avatarImg)}
              />
            )}
          </ImageGrid>
          {lightboxDisplay && (
            <Lightbox
              onClick={hideLightBox}
              onPrevClick={showPrev}
              onNextClick={showNext}
              src={imageToShow}
              alt="Dog Image"
            />
          )}
        </Styled.GaleryBlock>
        <Styled.DataBlock>
          <Styled.FlexContainerBtn>
            <Button text="Go back" icon="back" onClick={handleGoBack} />
            <Button text="Save this pet" icon="heart" />
          </Styled.FlexContainerBtn>
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
                  title={item.key}
                  data={item.value}
                />
              ))}
            </Styled.GeneralInfoBox>
          </Styled.FlexContainer>
        </Styled.DataBlock>
      </Styled.CardContainer>
    </Styled.CardWrapper>
  );
};

export default PetDetailCardTemplate;
