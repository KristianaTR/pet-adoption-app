import {
  SearchAndFilterBarContainer,
  SearchAndFilterBarHeading,
} from "./SearchAndFilterBar.style";
import Button from "@Components/atoms/Button";
import SearchInput from "../../molecules/SeachInput";
import FilterPanel from "@Components/molecules/FilterPanel";
import { useState } from "react";

const SearchAndFilterBar = () => {
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const filterOptions = [
    {
      category: "Age",
      values: ["baby", "young", "adult", "senior", "any"],
    },
    {
      category: "Gender",
      values: ["male", "female", "any"],
    },
    {
      category: "Size",
      values: ["small", "medium", "large", "xlarge", "any"],
    },
  ];

  const toggleFilterPanel = () => {
    setIsFilterPanelOpen(!isFilterPanelOpen);
  };

  // const handleSearch = () => {
  //   console.log("Searching is active!");
  // };

  return (
    <SearchAndFilterBarContainer>
      <SearchAndFilterBarHeading>
        <SearchInput />
        {/* {!isFilterPanelOpen && (
          <Button text="Filter" onClick={toggleFilterPanel} />
        )} */}
        <Button text="Filter" onClick={toggleFilterPanel} />
      </SearchAndFilterBarHeading>
      {/* {isFilterPanelOpen && <FilterPanel isOpen={isFilterPanelOpen} filterOptions={filterOptions} />} */}
      <FilterPanel isOpen={isFilterPanelOpen} filterOptions={filterOptions} />
    </SearchAndFilterBarContainer>
  );
};

export default SearchAndFilterBar;
