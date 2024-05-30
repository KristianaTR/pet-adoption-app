import Heading from "@atoms/Heading";
import Paragraph from "@Components/atoms/Paragraph";
import PetCardTemplate from "@Components/templates/PetCardTemplate";
import SectionTemplate from "@Components/templates/SectionTemplate";
import { useEffect, useState } from "react";
import Icon from "@Components/atoms/Icon";
import PetGridTemplate from "@Components/templates/PetGridTemplate/PetGridTemplate";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import {
  selectDogsData,
  selectFilteredDogs,
} from "@Store/Reducers/petsReducer";
import { fetchDogsData } from "@Store/Actions/petsActions";
import { FlexContainer } from "@Components/templates/FlexContainerTemplate/FlexContainerTemplate.style";
import SpinnerLoader from "@Components/molecules/SpinnerLoader";
import ErrorBoundary from "@Components/molecules/ErrorBoundary";
import SearchAndFilterBar from "@Components/organisms/SearchAndFilterBar";
import Pagination from "@Components/molecules/Pagination";

const SectionDogs = () => {
  const dispatch = useAppDispatch();
  const dogsData = useAppSelector(selectDogsData);
  console.log(dogsData);
  const filteredPets = useAppSelector(selectFilteredDogs);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 20;

  const handleError = (error: Error) => {
    console.error("Error:", error);
    setLoading(false);
    throw new Error("Error:" + error);
  };

  useEffect(() => {
    // Check if dogsData is already available
    if (!dogsData.length) {
      setLoading(true);
      dispatch(fetchDogsData())
        .then(() => setLoading(false))
        .catch(handleError);
    }
  }, [dispatch, dogsData]);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log("CurrentPage: " + pageNumber);
  };

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = filteredPets.length
    ? filteredPets
    : dogsData.slice(indexOfFirstDog, indexOfLastDog);
  console.log("currentDogs " + currentDogs.length);

  return (
    <ErrorBoundary>
      <SectionTemplate>
        <Heading text="Dogs" />
        <SearchAndFilterBar />
        {(!currentDogs || loading) && <SpinnerLoader />}
        <PetGridTemplate>
          {Array.isArray(currentDogs) &&
            currentDogs.map((dog) => (
              <PetCardTemplate
                key={dog.id}
                linkTo={`/${dog.name.toLowerCase()}`}
                imageUrl={
                  dog.primary_photo_cropped?.medium || "/Images/dog-paw.svg"
                }
              >
                <Paragraph
                  $large
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
        {!filteredPets.length && (
          <Pagination
            petsPerPage={dogsPerPage}
            length={dogsData.length}
            currentPage={currentPage}
            handlePagination={handlePagination}
          />
        )}
        {/* {(!dogsData || loading) && <SpinnerLoader />} */}
      </SectionTemplate>
    </ErrorBoundary>
  );
};

export default SectionDogs;
