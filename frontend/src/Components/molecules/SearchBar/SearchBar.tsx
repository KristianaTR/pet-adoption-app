import Input from '@Components/atoms/Input'
import { SearchBarContainer } from './SearchBar.style'
import Button from '@Components/atoms/Button';

const SearchBar = () => {
    const handleSearch = () => {
        console.log("Searching is active!")
    };

  return (
    <SearchBarContainer>
        <Input 
            type='text' 
            placeholder='Search by pet name or ID'
            onChange={handleSearch}
        />
        <Button text='Clear all'/>
        <Button text='Filter'/>
    </SearchBarContainer>
  )
}

export default SearchBar