import Header from "@Components/organisms/Header"
import SectionAdopt from "@Components/organisms/SectionAdopt";
import SectionHero from "@organisms/SectionHero"
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <StyledHome>
      <Header/>
      <SectionHero/>
      <SectionAdopt/>
    </StyledHome>
  )
}

export default HomePage