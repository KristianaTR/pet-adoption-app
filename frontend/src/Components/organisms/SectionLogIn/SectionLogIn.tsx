import Heading from "@Components/atoms/Heading";
import ErrorBoundary from "@Components/molecules/ErrorBoundary";
import SectionTemplate from "@Components/templates/SectionTemplate";

const SectionLogIn = () => {
  return (
    <ErrorBoundary>
      <SectionTemplate>
        <Heading text="Enter your email and password" />
      </SectionTemplate>
    </ErrorBoundary>
  );
};

export default SectionLogIn;
