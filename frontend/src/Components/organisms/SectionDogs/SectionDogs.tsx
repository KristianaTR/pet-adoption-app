import Heading from "@atoms/Heading";
import Paragraph from "@Components/atoms/Paragraph";
import PetCardTemplate from "@Components/templates/PetCardTemplate";
import SectionTemplate from "@Components/templates/SectionTemplate";
import axios from "axios";
import { useEffect, useState } from "react";
import Icon from "@Components/atoms/Icon";
import PetGridTemplate from "@Components/templates/PetGridTemplate/PetGridTemplate";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { selectAccessToken, selectDogsData } from "@Store/Reducers/petsReducer";
import { dogDataTypes } from "./SectionDogs.types";
import { fetchDogsData, fetchPetfinderToken } from "@Store/Actions/petsActions";
import { FlexContainer } from "@Components/templates/FlexContainerTemplate/FlexContainerTemplate.style";
import { ReactComponent as LikeIcon } from "@/Assets/icons/icon-heart.svg";
import avatarImg from "@/Assets/icons/dog-paw.svg";
import { ReactComponent as FemaleIcon } from "@/Assets/icons/icon-female.svg";
import { ReactComponent as MaleIcon } from "@/Assets/icons/icon-male.svg";

const SectionDogs = () => {
  const dispatch = useAppDispatch();
  // const [dogData, setDogData] = useState<dogDataTypes[]>([]);
  const accessToken = useAppSelector(selectAccessToken);
  const [dogsData, setDogsData] = useState<dogDataTypes[]>(
    useAppSelector(selectDogsData)
  );

  const handleLikeIconClick = () => {
    // Add your logic here for handling the LikeIcon click
    console.log('LikeIcon clicked!');
    // You can dispatch an action or update state as needed
  };

  useEffect(() => {
    // Dispatch the action to fetch Petfinder access token
    dispatch(fetchPetfinderToken())
      .then(() => {
        // Once the access token is obtained, use it to fetch pet types
        return dispatch(fetchDogsData());
      })
      .catch((error) => {
        console.error("Error fetching Petfinder access token:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        if (!accessToken) {
          // Access token is not available yet, wait for the next render
          return;
        }

        const response = await axios.get(
          `https://api.petfinder.com/v2/animals`,
          {
            params: {
              type: "dog",
              page: 1,
            },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response.data.animals);
        setDogsData(response.data.animals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPetData();
  }, [accessToken]);

  console.log(dogsData);

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
                <Icon alt="heart icon" color="#ffffff" onClick={handleLikeIconClick}>
                  <LikeIcon />
                </Icon>
              }
            >
              <Paragraph $larger $accent>
                {dog.name}
              </Paragraph>
              <FlexContainer justifyContent="space-between">
                <Paragraph $accent>{`Age: ${dog.age}`}</Paragraph>
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
