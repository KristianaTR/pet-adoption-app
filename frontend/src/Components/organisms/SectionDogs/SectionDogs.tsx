import Heading from "@atoms/Heading";
import Paragraph from "@Components/atoms/Paragraph";
import PetCardTemplate from "@Components/templates/PetCardTemplate";
import SectionTemplate from "@Components/templates/SectionTemplate";
import { useEffect, useState } from "react";
import Icon from "@Components/atoms/Icon";
import PetGridTemplate from "@Components/templates/PetGridTemplate/PetGridTemplate";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { selectAccessToken, selectDogsData } from "@Store/Reducers/petsReducer";
import { dogDataTypes } from "./SectionDogs.types";
import { fetchDogsData, fetchPetfinderToken, updateDogsData } from "@Store/Actions/petsActions";
import { FlexContainer } from "@Components/templates/FlexContainerTemplate/FlexContainerTemplate.style";
import { ReactComponent as LikeIcon } from "@/Assets/icons/icon-heart.svg";
import avatarImg from "@/Assets/icons/dog-paw.svg";
import { ReactComponent as FemaleIcon } from "@/Assets/icons/icon-female.svg";
import { ReactComponent as MaleIcon } from "@/Assets/icons/icon-male.svg";
import { SectionContainer } from "@Components/templates/SectionTemplate/SectionTemplate.style";

const SectionDogs = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectAccessToken);
  console.log(accessToken)
  const [dogsData, setDogsData] = useState<dogDataTypes[]>(
    useAppSelector(selectDogsData)
  );

  console.log(dogsData);

  // const handleLikeIconClick = () => {
  //   // Add your logic here for handling the LikeIcon click
  //   console.log('LikeIcon clicked!');
  //   // You can dispatch an action or update state as needed
  // };

  useEffect(() => {
  // Dispatch the action to fetch Petfinder access token
  dispatch(fetchPetfinderToken())
    .then(() => {
      // Once the access token is obtained, use it to fetch dog data
      dispatch(fetchDogsData())
        .then((dogsDataResponse) => {
          // Cast payload to the correct type
          const fetchedDogsData = dogsDataResponse.payload as dogDataTypes[];
          setDogsData(fetchedDogsData);
          console.log(fetchedDogsData);
        })
        .catch((error) => {
          console.error("Error fetching dogs data:", error);
        });
    })
    .catch((error) => {
      console.error("Error fetching Petfinder access token:", error);
    });
}, []);

if (!dogsData) {
  // Handle the case where dogsData is not available yet
  return (
    <SectionContainer>
      <FlexContainer>Loading...</FlexContainer>
    </SectionContainer>
  );
}

  return (
    <SectionTemplate>
      <Heading text="Dogs" />
      <PetGridTemplate>
        {dogsData &&
          dogsData.map((dog) => (
            <PetCardTemplate
              key={dog.name}
              linkTo={`/${dog.name.toLowerCase()}`}
              imageUrl={dog.primary_photo_cropped?.medium || avatarImg}
              icon={
                <Icon alt="heart icon" color="#ffffff" >
                  <LikeIcon />
                </Icon>
              }
            >
              <Paragraph $larger $accent text={!dog.name ? "No name" : dog.name}/>
              <FlexContainer justifyContent="space-between">
                <Paragraph $accent text={`Age: ${dog.age}`}/>
                <Icon alt="female icon" color="#ffffff">
                  {dog.gender === "Female" ? <FemaleIcon /> : <MaleIcon />}
                </Icon>
              </FlexContainer>
            </PetCardTemplate>
          ))}
      </PetGridTemplate>
    </SectionTemplate>
  );
};

export default SectionDogs;
