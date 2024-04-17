import { useEffect, useState } from "react";
import {
  SearchBtn,
  SearchInputStyled,
  SearchInputWrapper,
} from "./SearchInput.style";
import _ from "lodash";
import { useAppSelector } from "@Store/hooks";
import { selectDogsData } from "@Store/Reducers/petsReducer";
import { dogDataTypes } from "@Components/organisms/SectionDogs/SectionDogs.types";

const SearchInput = () => {
  const dogsData = useAppSelector(selectDogsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPets, setFilteredPets] = useState<dogDataTypes[]>([]);
  const [showFilterBtn, setShowFilterBtn] = useState(true);

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

    setFilteredPets(filteredItems);
    setShowFilterBtn(false);
  };

  useEffect(() => {
    console.log(filteredPets);
  }, [filteredPets]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleBlur = () => {
    handleSearch();
  };

  const handleClear = () => {
    setFilteredPets([]);
    setShowFilterBtn(true);
  };

  return (
    <SearchInputWrapper>
      <SearchInputStyled
        type="text"
        placeholder="Search by pet name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        onBlur={handleBlur}
      />
      {showFilterBtn ? (
          <SearchBtn
            text=""
            icon="search"
            variant="common"
            onClick={handleSearch}
          />
      ) : (
        <SearchBtn
          text=""
          icon="close"
          variant="common"
          onClick={handleClear}
        />
      )}
    </SearchInputWrapper>
  );
};

export default SearchInput;
