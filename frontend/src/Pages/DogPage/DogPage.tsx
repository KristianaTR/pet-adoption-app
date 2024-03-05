import Header from "@Components/organisms/Header";
import SectionDogs from "@Components/organisms/SectionDogs";
import PageTemplate from "@Components/templates/PageTemplate";

const DogPage = () => {
  return (
    <PageTemplate>
      <Header></Header>
      <SectionDogs></SectionDogs>
    </PageTemplate>
  );
};

export default DogPage;
