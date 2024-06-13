import Heading from "@atoms/Heading";
import Paragraph from "@Components/atoms/Paragraph";
import PetCardTemplate from "@Components/templates/PetCardTemplate";
import SectionTemplate from "@Components/templates/SectionTemplate";
import { useEffect, useState } from "react";
import Icon from "@Components/atoms/Icon";
import PetGridTemplate from "@Components/templates/PetGridTemplate/PetGridTemplate";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { selectDogsData, selectAccessToken } from "@Store/Reducers/petsReducer";
import {
  selectFilteredDogs,
  selectFilterIsActive,
  selectSearchIsActive,
} from "@Store/Reducers/filterReducer";
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
  const petfinderToken = useAppSelector(selectAccessToken);
  console.log("petfinderToken from redux: "+ petfinderToken);
  const filteredPets = useAppSelector(selectFilteredDogs);
  const filterIsActive = useAppSelector(selectFilterIsActive);
  const searchIsActive = useAppSelector(selectSearchIsActive);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 20;
  console.log("currentPage: "+ currentPage)

  const handleError = (error: Error) => {
    console.error("Error:", error);
    setLoading(false);
    throw new Error("Error:" + error);
  };

  useEffect(() => {
    if (dogsData.length === 0) {
      setLoading(true);
      dispatch(fetchDogsData())
        .then(() => setLoading(false))
        .catch(handleError);
    }
  }, [dispatch, dogsData.length]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredPets]);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log("CurrentPage: " + pageNumber);
  };

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;

  const currentDogs = filteredPets.length > 0
  ? filteredPets.slice(indexOfFirstDog, indexOfLastDog)
  : dogsData.slice(indexOfFirstDog, indexOfLastDog);

  console.log(filteredPets.slice(indexOfFirstDog, indexOfLastDog))
  console.log("currentDogs " + currentDogs.length);
  console.log("currentDogs: ");
  console.log(currentDogs);
  console.log("filterIsActive: " + filterIsActive);
  console.log("searchIsActive: " + searchIsActive);
  console.log("filteredPets: "+ filteredPets.length);
  const showPagination = (!filterIsActive || !searchIsActive) ||
  ((filterIsActive || searchIsActive) && currentDogs.length > dogsPerPage);

  return (
    <ErrorBoundary>
      <SectionTemplate>
        <Heading text="Dogs" />
        <SearchAndFilterBar />
        {loading && <SpinnerLoader />}
        {filterIsActive && filteredPets.length === 0 ? (
          <Paragraph text="Sorry, no dogs match your filter criteria. Please adjust your filters and try again." />
        ) : (
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
        )}
        {showPagination && (
          <Pagination
            petsPerPage={dogsPerPage}
            length={filteredPets.length ? filteredPets.length : dogsData.length}
            currentPage={currentPage}
            handlePagination={handlePagination}
          />
        )}
      </SectionTemplate>
    </ErrorBoundary>
  );
};

export default SectionDogs;
