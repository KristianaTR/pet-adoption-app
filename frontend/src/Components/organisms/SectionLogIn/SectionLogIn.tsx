import Heading from "@Components/atoms/Heading";
import ErrorBoundary from "@Components/molecules/ErrorBoundary";
import FormLogIn from "@Components/molecules/FormLogIn";
import SectionTemplate from "@Components/templates/SectionTemplate";

const SectionLogIn = () => {
  return (
    <ErrorBoundary>
      <SectionTemplate>
        <Heading text="Enter your email and password" />
        <FormLogIn/>
      </SectionTemplate>
    </ErrorBoundary>
  );
};

export default SectionLogIn;
