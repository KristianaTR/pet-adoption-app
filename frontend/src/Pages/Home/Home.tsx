import Header from "@Components/organisms/Header"
import SectionHero from "@organisms/SectionHero"
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <StyledHome>
      <Header/>
      <SectionHero/>
    </StyledHome>
  )
}

export default Home