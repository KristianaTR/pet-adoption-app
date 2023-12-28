import Header from "@Components/organisms/Header";
import SectionAdopt from "@Components/organisms/SectionAdopt";
import styled from "styled-components";

const StyledAdoptPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdoptPage = () => {
  return (
    <StyledAdoptPage>
      <Header/>
      <SectionAdopt/>
    </StyledAdoptPage>
  )
}

export default AdoptPage