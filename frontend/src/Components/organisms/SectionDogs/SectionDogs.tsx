import Heading from "@atoms/Heading";
import Image from "@atoms/Image";
import Paragraph from "@Components/atoms/Paragraph";
import CardTemplate from "@Components/templates/CardTemplate";
import GridTemplate from "@Components/templates/GridTemplate";
import SectionTemplate from "@Components/templates/SectionTemplate";
import axios from "axios";
import { useEffect, useState } from "react";

interface dogDataProps {
  name: string;
  gender: string;
  primary_photo_cropped: {
    small: string;
    medium: string;
    large: string;
  }
}

const avatarImg = {
  src:"./Images/dog-paw.svg"
};

const genderIcon = {
  female: "./Images/icon-female.svg",
  male: "./Images/icon-male.svg"
};


const SectionDogs = () => {
  const [dogData, setDogData] = useState<dogDataProps[]>([]);
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
        setDogData(response.data.animals);
        console.log(dogData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPetData();
  }, [accessToken]);

  return (
    <SectionTemplate>
      <Heading text="Dogs" />
      <GridTemplate>
        {dogData &&
          dogData.map((dog) => (
            <CardTemplate key={dog.name} linkTo={`/${dog.name.toLowerCase()}`}>
              <Paragraph text={dog.name}/>
              {dog.gender === "Female" ?
              (<Image src={genderIcon.female} alt="female icon"/>) :
              (<Image src={genderIcon.male} alt="male icon"/>)
              }
              {dog.primary_photo_cropped?.medium ? 
              (
                <Image src={dog.primary_photo_cropped.medium} alt="dog picture"></Image>
              ) :
              (<Image src={avatarImg.src} alt="avatar"/>)
            }
            </CardTemplate>
          ))}
      </GridTemplate>
    </SectionTemplate>
  );
};

export default SectionDogs;
