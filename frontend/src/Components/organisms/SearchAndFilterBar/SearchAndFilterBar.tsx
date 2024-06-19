import {
  SearchAndFilterBarContainer,
  SearchAndFilterBarHeading,
} from "./SearchAndFilterBar.style";
import Button from "@Components/atoms/Button";
import SearchInput from "../../molecules/SeachInput";
import FilterPanel from "@Components/molecules/FilterPanel";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "@Store/hooks";
import { selectFilterIsActive } from "@Store/Reducers/filterReducer";

const SearchAndFilterBar = () => {
  const filterIsActive = useAppSelector(selectFilterIsActive);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  useEffect(() => {
    if (filterIsActive) {
      setIsFilterPanelOpen(true);
    }
  }, [filterIsActive]);

  const filterOptions = [
    {
      category: "Age",
      values: ["baby", "young", "adult", "senior"],
    },
    {
      category: "Gender",
      values: ["male", "female"],
    },
    {
      category: "Size",
      values: ["small", "medium", "large", "xlarge"],
    },
  ];

  const toggleFilterPanel = () => {
    setIsFilterPanelOpen(!isFilterPanelOpen);
  };

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
