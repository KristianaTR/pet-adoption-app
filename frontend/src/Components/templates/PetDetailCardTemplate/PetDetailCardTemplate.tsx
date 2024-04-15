import { selectDogsData } from "@Store/Reducers/petsReducer";
import * as Styled from "./PetDetailCardTemplate.style";
import { PetDetailCardProps } from "./PetDetailCardTemplate.types";
import { useAppSelector } from "@Store/hooks";
import Heading from "@Components/atoms/Heading";
import Paragraph from "@Components/atoms/Paragraph";
import { FlexContainer } from "../FlexContainerTemplate/FlexContainerTemplate.style";
import { SectionContainer } from "../SectionTemplate/SectionTemplate.style";
import PetDataCard from "@Components/molecules/PetDataCard";
import Button from "@Components/atoms/Button";
import { IconType } from "@Components/atoms/Icon/Icon.types";
import { useNavigate } from "react-router-dom";
import ImageGrid from "@Components/organisms/ImageGrid";
import ImageGridItem from "@Components/molecules/ImageGridItem";
import { useState } from "react";
import Lightbox from "@Components/molecules/Lightbox";
import SpinnerLoader from "@Components/molecules/SpinnerLoader";
import ErrorBoundary from "@Components/molecules/ErrorBoundary";
import ErrorFallback from "@Components/molecules/ErrorFallback";

const PetDetailCardTemplate = ({ dogName = "" }: PetDetailCardProps) => {
  const dogsData = useAppSelector(selectDogsData);
  const navigate = useNavigate();
  console.log(dogsData);

  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const showImage = (image: string) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
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

  if (!dogsData) {
    // Handle the case where dogsData is not available yet
    return <SpinnerLoader />;
  }

  const currentDog = dogsData.find(
    (dog) => dog.name?.toLowerCase() === dogName.toLowerCase()
  );

  console.log(currentDog);
  console.log(currentDog?.name);

  if (!currentDog) {
    return (
      // <SectionContainer>
      //   <FlexContainer>
      //     <Paragraph $large text="Dog not found" />
      //   </FlexContainer>
      // </SectionContainer>
      <ErrorFallback/>
    );
  }

  const { age, gender, id, size, status, breeds, photos, name, description } =
    currentDog;

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

  const handleGoBack = () => {
    navigate("/dog");
  };

  return (
    <ErrorBoundary>
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
                  src={"/Images/dog-paw.svg"}
                  alt="Default Dog Image"
                  onClick={() => showImage("/Images/dog-paw.svg")}
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
              <Button
                text="Go back"
                variant="common"
                icon="back"
                onClick={handleGoBack}
              />
              <Button text="Save this pet" variant="common" icon="heart" />
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
                    variant="petData"
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
    </ErrorBoundary>
  );
};

export default PetDetailCardTemplate;
