import Footer from "@Components/organisms/Footer";
import Header from "@Components/organisms/Header";
import PageTemplate from "@Components/templates/PageTemplate";
import PetDetailCardTemplate from "@Components/templates/PetDetailCardTemplate";
import { useParams } from 'react-router-dom';

const PetDetailPage = () => {
  const { dogName } = useParams();
  
  
  return (
    <PageTemplate>
      <Header/>
      <PetDetailCardTemplate dogName={dogName}></PetDetailCardTemplate>
      <Footer/>
    </PageTemplate>
  );
};

export default PetDetailPage;
