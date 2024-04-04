import Header from "@Components/organisms/Header"
import SectionAdopt from "@Components/organisms/SectionAdopt";
import SectionHero from "@organisms/SectionHero"
import PageTemplate from "@Components/templates/PageTemplate";
import Footer from "@Components/organisms/Footer";

const HomePage = () => {
  return (
    <PageTemplate>
      <Header/>
      <SectionHero/>
      <SectionAdopt/>
      <Footer/>
    </PageTemplate>
  )
}

export default HomePage