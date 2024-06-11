import Heading from "@atoms/Heading";
import Paragraph from "@atoms/Paragraph";
import CardTemplate from "@Components/templates/CardTemplate";
import GridTemplate from "@Components/templates/GridTemplate";
import SectionTemplate from "@Components/templates/SectionTemplate";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { selectPetTypes, selectAccessToken } from "@Store/Reducers/petsReducer";
import { fetchPetTypes, fetchPetfinderToken } from "@Store/Actions/petsActions";
import { PetIconsType, PetType } from "./SectionAdopt.types";
import Icon from "@Components/atoms/Icon";
import theme from "Styles/Theme";
import SpinnerLoader from "@Components/molecules/SpinnerLoader";
import ErrorBoundary from "@Components/molecules/ErrorBoundary";

const petTypeMappings: { [displayName: string]: string } = {
  "Small & Furry": "smallAndFurry",
  "Scales, Fins & Other": "scalesFinsAndOther",
};

const petIcons: PetIconsType = {
  dog: "dog",
  cat: "cat",
  rabbit: "rabbit",
  smallAndFurry: "smallAndFurry",
  horse: "horse",
  bird: "bird",
  scalesFinsAndOther: "aquarium",
  barnyard: "farm",
  default: "paw",
};

const getIconName = (displayName: string): string => {
  const key = petTypeMappings[displayName] || displayName.toLowerCase();
  return petIcons[key] || petIcons.default;
};

const SectionAdopt = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectAccessToken);
  console.log(accessToken)
  // const petTypes = useAppSelector(selectPetTypes);
  const [petTypes, setPetTypes] = useState(useAppSelector(selectPetTypes))
  console.log(petTypes)
  
  const [loading, setLoading] = useState(false);

  const handleError = (error: Error) => {
    console.error("Error:", error);
    setLoading(false);
    throw new Error("Error:" + error);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   dispatch(fetchPetTypes())
  //     .then(() => setLoading(false))
  //     .catch(handleError);
  // }, [dispatch]);

  useEffect(() => {
    if (!accessToken) {
      // If access token is not available, fetch it
      dispatch(fetchPetfinderToken())
        .then(() => {
          // Once the access token is obtained, use it to fetch pet types
          dispatch(fetchPetTypes())
            .then((action) => {
              setPetTypes(action.payload as PetType[]);
            })
            .catch((error) => {
              console.error("Error fetching pet types:", error);
              throw new Error("Error fetching pet types: " + error);
            });
        })
        .catch((error) => {
          console.error("Error fetching Petfinder access token:", error);
          throw new Error("Error fetching Petfinder access token: " + error);
        });
    } 
  }, [accessToken, dispatch]);

  if (!petTypes || loading) {
    return <SpinnerLoader />;
  }

  return (
    <ErrorBoundary>
      <SectionTemplate>
        <Heading text="Meet your new best friend" />
        <GridTemplate>
          {petTypes.map((petType) => (
            <CardTemplate
              key={petType.name}
              linkTo={`/${petType.name.toLowerCase()}`}
            >
              <Paragraph $textAlignCenter text={petType.name}></Paragraph>
              <Icon
                variant="petType"
                icon={getIconName(petType.name)}
                width={"100px"}
                color={theme.colors.iconAccent}
              />
            </CardTemplate>
          ))}
        </GridTemplate>
      </SectionTemplate>
    </ErrorBoundary>
  );
};

export default SectionAdopt;
