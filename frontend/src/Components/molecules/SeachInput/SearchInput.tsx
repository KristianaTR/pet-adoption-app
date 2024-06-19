import { useEffect, useState } from "react";
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
import { selectSearchIsActive } from "@Store/Reducers/filterReducer";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const dogsData = useAppSelector(selectDogsData);
  const [searchTerm, setSearchTerm] = useState("");
  const searchIsActive = useAppSelector(selectSearchIsActive);
  const [showFilterBtn, setShowFilterBtn] = useState(!searchIsActive);

  useEffect(() => {
    if (searchIsActive) {
      console.log("searchTerm: "+ searchTerm );
      setShowFilterBtn(false);
      const storedSearchTerm = sessionStorage.getItem("searchTerm");
      if (storedSearchTerm) {
        setSearchTerm(storedSearchTerm);
      }
    } else {
      setShowFilterBtn(true);
      setSearchTerm("");
      sessionStorage.removeItem("searchTerm");
    }
  }, [searchIsActive]);

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
    sessionStorage.setItem("searchTerm", searchTerm);
  };

  const handleClear = () => {
    dispatch(setFilteredDogs([]));
    dispatch(setSearchIsActive(false));
    setSearchTerm("");
    sessionStorage.removeItem("searchTerm");
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
