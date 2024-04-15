import { SearchBtn, SearchInputStyled, SearchInputWrapper } from "./SearchInput.style";

const SearchInput = () => {
  const handleSearch = () => {
    console.log("Searching is active!");
  };
  
  return (
    <SearchInputWrapper>
      <SearchInputStyled
        type="text"
        placeholder="Search by pet name or ID"
        // onChange={handleSearch}
      />
      <SearchBtn text="" icon="search" variant="common" onClick={handleSearch}/>
    </SearchInputWrapper>
  );
};

export default SearchInput;
