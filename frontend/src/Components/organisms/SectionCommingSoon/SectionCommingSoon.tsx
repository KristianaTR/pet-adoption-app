import ErrorBoundary from "@Components/molecules/ErrorBoundary";
import * as Styled from "./SectionCommingSoon.style";
import { useNavigate } from "react-router-dom";
import Button from "@Components/atoms/Button";
import { SectionContainer } from "@Components/templates/SectionTemplate/SectionTemplate.style";

const SectionCommingSoon = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <ErrorBoundary>
      <Styled.PageContainer>
        <SectionContainer>
          <Styled.PageHeading text="coming soon" />
          <Button text="Go Back" onClick={handleGoBack} />
        </SectionContainer>
      </Styled.PageContainer>
    </ErrorBoundary>
  );
};

export default SectionCommingSoon;
