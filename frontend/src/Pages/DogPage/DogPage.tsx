import Header from "@Components/organisms/Header";
import SectionDogs from "@Components/organisms/SectionDogs";
import styled from "styled-components";

const StyledDogPage = styled.div`
  display: flex;
  flex-direction: column;
`;


const DogPage = () => {
  return (
    <StyledDogPage>
        <Header></Header>
        <SectionDogs></SectionDogs>

    </StyledDogPage>
  )
}

export default DogPage