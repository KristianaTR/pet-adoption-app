import Heading from "@atoms/Heading";
import Paragraph from "@Components/atoms/Paragraph";
import PetCardTemplate from "@Components/templates/PetCardTemplate";
import SectionTemplate from "@Components/templates/SectionTemplate";
import { useEffect, useState } from "react";
import Icon from "@Components/atoms/Icon";
import PetGridTemplate from "@Components/templates/PetGridTemplate/PetGridTemplate";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { selectDogsData } from "@Store/Reducers/petsReducer";
import { dogDataTypes } from "./SectionDogs.types";
import { fetchDogsData, fetchMoreDogsData, updateDogsData } from "@Store/Actions/petsActions";
import { FlexContainer } from "@Components/templates/FlexContainerTemplate/FlexContainerTemplate.style";
import SpinnerLoader from "@Components/molecules/SpinnerLoader";
import Button from "@Components/atoms/Button";
import ErrorBoundary from "@Components/molecules/ErrorBoundary";
import SearchAndFilterBar from "@Components/organisms/SearchAndFilterBar";

const SectionDogs = () => {
  const dispatch = useAppDispatch();
  const initialDogsData = useAppSelector(selectDogsData);
  const [dogsData, setDogsData] = useState<dogDataTypes[]>(initialDogsData);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleError = (error: Error) => {
    console.error("Error:", error);
    setLoading(false);
    throw new Error("Error:" + error);
  };
  
  useEffect(() => {
    // Fetch initial dogs data when component mounts
    setLoading(true);
    dispatch(fetchDogsData())
    .then((action) => {
      const initialData = action.payload as dogDataTypes[];
      setDogsData(initialData);
      dispatch(updateDogsData(initialData));
      setLoading(false);
    }).catch(handleError);
  }, [dispatch]);

  const handleLoadMore = () => {
    setLoading(true);
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    console.log("pageNumber:", pageNumber)
    
    dispatch(fetchMoreDogsData(pageNumber + 1))
    .then((action) => {
      // Access the payload of the PayloadAction
      const newDogsData = action.payload as dogDataTypes[];

      // Update Redux store with the new data
      dispatch(updateDogsData(newDogsData));
      
      // Append the new data to the existing data
      setDogsData((prevDogsData) => [...prevDogsData, ...newDogsData]);
      setLoading(false);
    })
    .catch(handleError);
  }; 

  const isLoadMoreButtonVisible = pageNumber < 5;

  return (
    <ErrorBoundary>
      <SectionTemplate>
        <Heading text="Dogs" />
        <SearchAndFilterBar/>
        {(!dogsData || loading) && <SpinnerLoader/>}
        <PetGridTemplate>
          {Array.isArray(dogsData) && 
            dogsData.map((dog) => (
              <PetCardTemplate
                key={dog.name}
                linkTo={`/${dog.name.toLowerCase()}`}
                imageUrl={dog.primary_photo_cropped?.medium || "/Images/dog-paw.svg"}
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
        {(!dogsData || loading) && <SpinnerLoader/>}
        {isLoadMoreButtonVisible && 
        <Button text="Load more" onClick={handleLoadMore}/>
        }
      </SectionTemplate>
    </ErrorBoundary>
  );
};

export default SectionDogs;
