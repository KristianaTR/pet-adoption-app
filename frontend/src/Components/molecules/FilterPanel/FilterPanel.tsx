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
      )}
    </>
  );
};

export default FilterPanel;
