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

const FilterPanel = ({ filterOptions, isOpen }: FilterPanelProps) => {
  return (
    <FilterPanelContainer isOpen={isOpen} filterOptions={filterOptions}>
      {filterOptions.map((option) => (
        <FilterItem key={option.category}>
          <FilterBtnContainer>
            {option.values.map((value) => (
              <FilterBtn key={value} text={value} />
            ))}
          </FilterBtnContainer>
          <FilterName text={option.category} />
        </FilterItem>
      ))}
      <ActionBtnContainer>
        <Button text="Clear all" />
        <Button text="Apply" />
      </ActionBtnContainer>
    </FilterPanelContainer>
  );
};

export default FilterPanel;
