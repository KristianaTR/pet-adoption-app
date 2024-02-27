import Header from "@Components/organisms/Header";
import PageTemplate from "@Components/templates/PageTemplate";
import PetDetailCardTemplate from "@Components/templates/PetDetailCardTemplate";
import { useParams } from 'react-router-dom';

const PetDetailPage = () => {
  const { dogName } = useParams();
  
  
  return (
    <PageTemplate>
      <Header></Header>
      <PetDetailCardTemplate dogName={dogName}></PetDetailCardTemplate>
    </PageTemplate>
  );
};

export default PetDetailPage;
