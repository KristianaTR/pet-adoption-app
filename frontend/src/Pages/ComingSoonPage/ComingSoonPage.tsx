import * as Styled from './ComingSoonPage.style';
import PageTemplate from '@Components/templates/PageTemplate';
import { useNavigate } from 'react-router-dom';


const ComingSoonPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate("/");
    };

  return (
    <PageTemplate>
        <Styled.PageContainer>
            <Styled.PageHeading text='coming soon'/>
            <Styled.PageBtn text='Go Back' onClick={handleGoBack}/>
            <Styled.PageCopyrightNotice text='@2024 My Learning Project'/>
        </Styled.PageContainer>
    </PageTemplate>
  )
}

export default ComingSoonPage