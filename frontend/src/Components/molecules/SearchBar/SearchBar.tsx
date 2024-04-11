import Input from '@Components/atoms/Input'
import { SearchBarContainer } from './SearchBar.style'
import Button from '@Components/atoms/Button';
import SearchInput from '../SeachInput';

const SearchBar = () => {
    const handleSearch = () => {
        console.log("Searching is active!")
    };

  return (
    <SearchBarContainer>
        <SearchInput />
        <Button text='Clear all'/>
        <Button text='Filter'/>
    </SearchBarContainer>
  )
}

export default SearchBar