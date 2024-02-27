import Header from "@Components/organisms/Header"
import SectionAdopt from "@Components/organisms/SectionAdopt";
import SectionHero from "@organisms/SectionHero"
import PageTemplate from "@Components/templates/PageTemplate";

const HomePage = () => {
  return (
    <PageTemplate>
      <Header/>
      <SectionHero/>
      <SectionAdopt/>
    </PageTemplate>
  )
}

export default HomePage