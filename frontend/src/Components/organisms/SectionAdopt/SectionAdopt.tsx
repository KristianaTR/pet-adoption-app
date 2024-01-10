import Heading from "@Components/atoms/Heading";
import CardTemplate from "@Components/templates/CardTemplate";
import ContainerTemplate from "@Components/templates/ContainerTemplate";
import SectionTemplate from "@Components/templates/SectionTemplate";
import axios from "axios";
import { useEffect, useState } from "react";

interface PetType {
  name: string;
}

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
      <ContainerTemplate>
        {petTypes.map((petType) => (
          <CardTemplate 
            key={petType.name}
            linkTo={`/${petType.name.toLowerCase()}`}
            >
            <div>{petType.name}</div>
          </CardTemplate>
        ))}
      </ContainerTemplate>
    </SectionTemplate>
  );
};

export default SectionAdopt;
