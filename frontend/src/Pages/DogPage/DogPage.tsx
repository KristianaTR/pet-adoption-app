import Footer from "@Components/organisms/Footer";
import Header from "@Components/organisms/Header";
import SectionDogs from "@Components/organisms/SectionDogs";
import PageTemplate from "@Components/templates/PageTemplate";

const DogPage = () => {
  return (
    <PageTemplate>
      <Header/>
      <SectionDogs></SectionDogs>
      <Footer/>
    </PageTemplate>
  );
};

export default DogPage;
