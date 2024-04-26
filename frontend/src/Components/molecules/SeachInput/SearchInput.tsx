import { useEffect, useRef, useState } from "react";
import {
  SearchBtn,
  SearchInputStyled,
  SearchInputWrapper,
} from "./SearchInput.style";
import _ from "lodash";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { selectDogsData } from "@Store/Reducers/petsReducer";
import { dogDataTypes } from "@Components/organisms/SectionDogs/SectionDogs.types";
import Tooltip from "@atoms/Tooltip";
import { setFilteredDogs } from "@Store/Actions/petsActions";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const dogsData = useAppSelector(selectDogsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPets, setFilteredPets] = useState<dogDataTypes[]>([]);
  const [showFilterBtn, setShowFilterBtn] = useState(true);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // const debouncedSearch = _.debounce((term: string) => {
  //   // Your search logic (e.g., API call) goes here

  //   console.log(`Searching for: ${term}`);
  // }, 4000);

  // event: React.ChangeEvent<HTMLInputElement> in case of input change
  // event: React.MouseEvent<HTMLButtonElement> in case of button click
  const handleSearch = () => {
    // debouncedSearch(value);
    setFilteredPets([]);
    console.log("Searching: " + searchTerm);
    const filteredItems = dogsData.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    dispatch(setFilteredDogs(filteredItems));
    setShowFilterBtn(false);
  };

  useEffect(() => {
    console.log(filteredPets);
  }, [filteredPets]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("Enter is pressed!");
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleBlur = () => {
    handleSearch();
  };

  const handleClear = () => {
    setFilteredPets([]);
    dispatch(setFilteredDogs([]));
    setSearchTerm("");
    setShowFilterBtn(true);
  };

  return (
    <SearchInputWrapper>
      <SearchInputStyled
        type="text"
        placeholder="Search by pet name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(event) => handleKeyPress(event)}
        onBlur={handleBlur}
      />
      {showFilterBtn ? (
        <Tooltip tip="Click to search">
          <SearchBtn
            text=""
            icon="search"
            variant="common"
            onClick={handleSearch}
          />
        </Tooltip>
      ) : (
        <Tooltip tip="Clear search">
          <SearchBtn
            text=""
            icon="close"
            variant="common"
            onClick={handleClear}
          />
        </Tooltip>
      )}
    </SearchInputWrapper>
  );
};

export default SearchInput;
