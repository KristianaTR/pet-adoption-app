import Heading from "@atoms/Heading";
import Paragraph from "@atoms/Paragraph";
import CardTemplate from "@Components/templates/CardTemplate";
import GridTemplate from "@Components/templates/GridTemplate";
import SectionTemplate from "@Components/templates/SectionTemplate";
import Image from "@atoms/Image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { selectPetTypes, selectAccessToken } from "@Store/Reducers/petsReducer";
import { fetchPetTypes, fetchPetfinderToken } from "@Store/Actions/petsActions";
import { PetIconsType, PetType } from "./SectionAdopt.types";

const petTypeMappings: { [displayName: string]: string } = {
  "Small & Furry": "smallAndFurry",
  "Scales, Fins & Other": "scalesFinsAndOther",
};

const petIcons: PetIconsType = {
  dog: "/Images/icon-dog.png",
  cat: "/Images/icon-cat.png",
  rabbit: "/Images/icon-rabbit.png",
  smallAndFurry: "/Images/icon-small&furry.png",
  horse: "/Images/icon-horse.png",
  bird: "/Images/icon-bird.png",
  scalesFinsAndOther: "/Images/icon-aquarium.png",
  barnyard: "/Images/icon-farm.png",
  default: "/Images/icon-paw.png",
};

const getIconPath = (displayName: string): string => {
  const key = petTypeMappings[displayName] || displayName.toLowerCase();
  return petIcons[key] || petIcons.default;
};

const SectionAdopt = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectAccessToken);
  console.log(accessToken);
  const [petTypes, setPetTypes] = useState<PetType[]>(
    useAppSelector(selectPetTypes)
  );

  useEffect(() => {
    // Dispatch the action to fetch Petfinder access token
    dispatch(fetchPetfinderToken())
      .then(() => {
        // Once the access token is obtained, use it to fetch pet types
        return dispatch(fetchPetTypes());
      })
      .catch((error) => {
        console.error("Error fetching Petfinder access token:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    // Fetch pet data when the access token changes
    const fetchPetData = async () => {
      try {
        if (!accessToken) {
          // Access token is not available yet, wait for the next render
          return;
        }

        const response = await axios.get(`https://api.petfinder.com/v2/types`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // Update the local state with pet types
        setPetTypes(response.data.types);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPetData();
  }, [accessToken]);

  console.log(petTypes);

  if (!petTypes) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <SectionTemplate>
      <Heading text="Meet your new best friend" />
      <GridTemplate>
        {petTypes.map((petType) => (
          <CardTemplate
            key={petType.name}
            linkTo={`/${petType.name.toLowerCase()}`}
          >
            <Paragraph $textAlignCenter text={petType.name}></Paragraph>
            <Image src={getIconPath(petType.name)} alt="pet type icon"></Image>
          </CardTemplate>
        ))}
      </GridTemplate>
    </SectionTemplate>
  );
};

export default SectionAdopt;
