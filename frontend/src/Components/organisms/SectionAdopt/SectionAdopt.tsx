import Heading from "@atoms/Heading";
import Paragraph from "@atoms/Paragraph";
import CardTemplate from "@Components/templates/CardTemplate";
import GridTemplate from "@Components/templates/GridTemplate";
import SectionTemplate from "@Components/templates/SectionTemplate";
import Image from "@atoms/Image";
import axios from "axios";
import { useEffect, useState } from "react";

interface PetType {
  name: string;
}

interface PetIconsType {
  [key: string]: string;
}

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
  const [petTypes, setPetTypes] = useState<PetType[]>([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/get-petfinder-token"
        );
        setAccessToken(response.data.accessToken);
      } catch (error) {
        console.error("Error fetching Petfinder access token:", error);
      }
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        if (!accessToken) {
          // Access token is not available yet, wait for the next render
          return;
        }

        const response = await axios.get(`https://api.petfinder.com/v2/types`, {
          // params: {
          //   // type: "dog",
          //   page: 1,
          // },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response.data.types);
        setPetTypes(response.data.types);
        console.log(petTypes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPetData();
  }, [accessToken]);

  return (
    <SectionTemplate>
      <Heading text="Meet your new best friend" />
      <GridTemplate>
        {petTypes.map((petType) => (
          <CardTemplate
            key={petType.name}
            linkTo={`/${petType.name.toLowerCase()}`}
          >
            <Paragraph text={petType.name} $textAlignCenter></Paragraph>
            <Image src={getIconPath(petType.name)} alt="pet type icon"></Image>
          </CardTemplate>
        ))}
      </GridTemplate>
    </SectionTemplate>
  );
};

export default SectionAdopt;
