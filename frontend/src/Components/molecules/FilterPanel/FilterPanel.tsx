import Button from "@Components/atoms/Button";
import {
  ActionBtnContainer,
  FilterBtn,
  FilterBtnContainer,
  FilterItem,
  FilterName,
  FilterPanelContainer,
} from "./FilterPanel.style";
import { FilterPanelProps } from "./FilterPanel.types";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { selectDogsData } from "@Store/Reducers/petsReducer";
import { setFilteredDogs } from "@Store/Actions/filterActions";
import { setFilterIsActive } from "@Store/Actions/filterActions";

const FilterPanel = ({ filterOptions, isOpen }: FilterPanelProps) => {
  const dispatch = useAppDispatch();
  const dogsData = useAppSelector(selectDogsData);
  interface FiltersState {
    [key: string]: string[];
  }

  const initialFilters: FiltersState = filterOptions.reduce<FiltersState>((acc, option) => {
    acc[option.category] = [];
    return acc;
  }, {});

  const [activeFilters, setActiveFilters] = useState<FiltersState>(() => {
    const savedFilters = localStorage.getItem("activeFilters");
    return savedFilters ? JSON.parse(savedFilters) : initialFilters;
  });

  useEffect(() => {
    localStorage.setItem("activeFilters", JSON.stringify(activeFilters));
  }, [activeFilters]);

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters((prevFilters) => {
      const categoryFilters = prevFilters[category];
      const newCategoryFilters = categoryFilters.includes(value)
        ? categoryFilters.filter((filter) => filter !== value)
        : [...categoryFilters, value];
      return { ...prevFilters, [category]: newCategoryFilters };
    });
  };

  const clearFilters = () => {
    setActiveFilters(initialFilters);
    dispatch(setFilteredDogs(dogsData));
    dispatch(setFilterIsActive(false));
  }

  const handleFilter = useCallback(() => {
    const filteredItems = dogsData.filter(dog => {
      const ageMatch = activeFilters.Age.length === 0 || activeFilters.Age.includes(dog.age.toLowerCase());
      const genderMatch =  activeFilters.Gender.length === 0 || activeFilters.Gender.includes(dog.gender.toLowerCase());
      const sizeMatch =  activeFilters.Size.length === 0 || activeFilters.Size.includes(dog.size.toLowerCase());
      
      return ageMatch && genderMatch && sizeMatch;
    });
    console.log(`Filtered Items:`, filteredItems);
    dispatch(setFilteredDogs(filteredItems));
    dispatch(setFilterIsActive(true));
  }, [activeFilters, dogsData, dispatch]);

  return (
    <>
      {isOpen && (
        <FilterPanelContainer
          key="filter-section"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {filterOptions.map((option) => (
            <FilterItem
              key={option.category}
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
            >
              <FilterBtnContainer>
                {option.values.map((value) => (
                  <FilterBtn
                    key={value}
                    text={value}
                    onClick={() => toggleFilter(option.category, value)}
                    className={activeFilters[option.category].includes(value) ? "active" : ""}
                  />
                ))}
              </FilterBtnContainer>
              <FilterName text={option.category} />
            </FilterItem>
          ))}
          <ActionBtnContainer>
            <Button text="Clear all" onClick={clearFilters}/>
            <Button text="Apply" onClick={handleFilter}/>
          </ActionBtnContainer>
        </FilterPanelContainer>
      )}
    </>
  );
};

export default FilterPanel;
