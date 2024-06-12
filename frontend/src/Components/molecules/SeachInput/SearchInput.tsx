import { useState } from "react";
import {
  SearchBtn,
  SearchInputStyled,
  SearchInputWrapper,
} from "./SearchInput.style";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { selectDogsData } from "@Store/Reducers/petsReducer";
import Tooltip from "@atoms/Tooltip";
import { setFilteredDogs } from "@Store/Actions/filterActions";
import { setSearchIsActive } from "@Store/Actions/filterActions";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const dogsData = useAppSelector(selectDogsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilterBtn, setShowFilterBtn] = useState(true);

  const handleSearch = () => {
    console.log("Searching: " + searchTerm);
    const searchTermLower = searchTerm.toLowerCase();

    const filteredItems = dogsData.filter((pet) => {
      const nameMatch = pet.name.toLowerCase().includes(searchTermLower);
      const idMatch = pet.id.toString().includes(searchTermLower); 
      return nameMatch || idMatch;
    });

    console.log(filteredItems);
    dispatch(setFilteredDogs(filteredItems));
    dispatch(setSearchIsActive(true));
    setShowFilterBtn(false);
  };

  const handleClear = () => {
    dispatch(setFilteredDogs([]));
    dispatch(setSearchIsActive(false));
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
