import Heading from "@atoms/Heading";
import Paragraph from "@Components/atoms/Paragraph";
import PetCardTemplate from "@Components/templates/PetCardTemplate";
// import GridTemplate from "@Components/templates/GridTemplate";
import SectionTemplate from "@Components/templates/SectionTemplate";
import axios from "axios";
import { useEffect, useState } from "react";
import Icon from "@Components/atoms/Icon";
import PetGridTemplate from "@Components/templates/PetGridTemplate/PetGridTemplate";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { selectAccessToken, selectDogsData } from "@Store/Reducers/petsReducer";
import { dogDataTypes } from "./SectionDogs.types";
import { fetchDogsData, fetchPetfinderToken } from "@Store/Actions/petsActions";

const avatarImg = {
  src: "./Images/dog-paw.svg",
};

const genderIcon = {
  female: "./Images/icon-female.svg",
  male: "./Images/icon-male.svg",
};

const SectionDogs = () => {
  const dispatch = useAppDispatch();
  // const [dogData, setDogData] = useState<dogDataTypes[]>([]);
  const accessToken = useAppSelector(selectAccessToken);
  const [dogsData, setDogsData] = useState<dogDataTypes[]>(
    useAppSelector(selectDogsData)
  );

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
              imageUrl={dog.primary_photo_cropped?.medium || avatarImg.src}
            >
              <Paragraph text={dog.name} $accent />
              <Paragraph text={`Age: ${dog.age}`} $accent />
              {dog.gender === "Female" ? (
                <Icon
                  src={genderIcon.female}
                  alt="female icon"
                  color="#ffffff"
                />
              ) : (
                <Icon src={genderIcon.male} alt="male icon" color="#ffffff" />
              )}
              {/* {dog.primary_photo_cropped?.medium ? 
              (
                <Image src={dog.primary_photo_cropped.medium} alt="dog picture"></Image>
              ) :
              (<Image src={avatarImg.src} alt="avatar"/>)
            } */}
            </PetCardTemplate>
          ))}
      </PetGridTemplate>
    </SectionTemplate>
  );
};

export default SectionDogs;
