import {
  SearchAndFilterBarContainer,
  SearchAndFilterBarHeading,
} from "./SearchAndFilterBar.style";
import Button from "@Components/atoms/Button";
import SearchInput from "../../molecules/SeachInput";
import FilterPanel from "@Components/molecules/FilterPanel";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

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
    console.log("isFilterPanelOpen: " + isFilterPanelOpen);
  };

  // const handleSearch = () => {
  //   console.log("Searching is active!");
  // };

  return (
    <SearchAndFilterBarContainer>
      <SearchAndFilterBarHeading>
        <SearchInput />
        <Button
          text={!isFilterPanelOpen ? "Open filter" : "Close filter"}
          onClick={toggleFilterPanel}
        />
      </SearchAndFilterBarHeading>
      <AnimatePresence initial={false}>
        {isFilterPanelOpen && (
          <FilterPanel
            filterOptions={filterOptions}
            isOpen={isFilterPanelOpen}
          />
        )}
      </AnimatePresence>
    </SearchAndFilterBarContainer>
  );
};

export default SearchAndFilterBar;
