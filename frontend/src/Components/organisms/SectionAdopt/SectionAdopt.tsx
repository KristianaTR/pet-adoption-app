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
  const petTypes = useAppSelector(selectPetTypes);
  const [loading, setLoading] = useState(false);

  const handleError = (error: Error) => {
    console.error("Error:", error);
    setLoading(false);
    throw new Error("Error:" + error);
  };

  useEffect(() => {
    if (!petTypes.length) {
      setLoading(true);
      dispatch(fetchPetTypes())
        .then(() => setLoading(false))
        .catch(handleError);
    }
  }, [dispatch, petTypes]);

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
