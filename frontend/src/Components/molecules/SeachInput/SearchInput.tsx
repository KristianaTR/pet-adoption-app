import { useState } from "react";
import {
  SearchBtn,
  SearchInputStyled,
  SearchInputWrapper,
} from "./SearchInput.style";
// import _ from "lodash";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { selectDogsData } from "@Store/Reducers/petsReducer";
import Tooltip from "@atoms/Tooltip";
import { setFilteredDogs } from "@Store/Actions/filterActions";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const dogsData = useAppSelector(selectDogsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilterBtn, setShowFilterBtn] = useState(true);

  // const debouncedSearch = _.debounce((term: string) => {
  //   // Your search logic (e.g., API call) goes here

  //   console.log(`Searching for: ${term}`);
  // }, 4000);

  const handleSearch = () => {
    // debouncedSearch(value);
    console.log("Searching: " + searchTerm);
    const filteredItems = dogsData.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredItems);
    dispatch(setFilteredDogs(filteredItems));
    setShowFilterBtn(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("Enter is pressed!");
    if (event.key === "Enter") {
      console.log("Enter is pressed!");
      handleSearch();
    }
  };

  const handleClear = () => {
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
