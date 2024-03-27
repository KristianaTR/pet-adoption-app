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
import { fetchDogsData, fetchPetfinderToken } from "@Store/Actions/petsActions";
import { FlexContainer } from "@Components/templates/FlexContainerTemplate/FlexContainerTemplate.style";
import avatarImg from "@/Assets/icons/dog-paw.svg";
import { SectionContainer } from "@Components/templates/SectionTemplate/SectionTemplate.style";

const SectionDogs = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectAccessToken);
  console.log(accessToken);
  // const [dogsData, setDogsData] = useState<dogDataTypes[]>(
  //   useAppSelector(selectDogsData)
  // );
  const dogsData = useAppSelector(selectDogsData);
  console.log(dogsData);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    // If data is already fetched, no need to fetch again
    if (dataFetched) {
      return;
    }

    // Dispatch the action to fetch Petfinder access token
    dispatch(fetchPetfinderToken())
      .then(() => {
        // Once the access token is obtained, use it to fetch dog data
        dispatch(fetchDogsData())
          .then((dogsDataResponse) => {
            // Cast payload to the correct type
            const fetchedDogsData = dogsDataResponse.payload as dogDataTypes[];
            // setDogsData(fetchedDogsData);
            setDataFetched(true);
            console.log(fetchedDogsData);
          })
          .catch((error) => {
            console.error("Error fetching dogs data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching Petfinder access token:", error);
      });
  }, [dataFetched, dispatch]);

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
            >
              <Paragraph
                $larger
                $accent
                text={!dog.name ? "No name" : dog.name}
              />
              <FlexContainer justifyContent="space-between">
                <Paragraph $accent text={`Age: ${dog.age}`} />
                {dog.gender === "Female" ? (
                  <Icon variant="common" icon="female" color="white" />
                ) : (
                  <Icon variant="common" icon="male" color="white" />
                )}
              </FlexContainer>
            </PetCardTemplate>
          ))}
      </PetGridTemplate>
    </SectionTemplate>
  );
};

export default SectionDogs;
