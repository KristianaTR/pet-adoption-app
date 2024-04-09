import PageTemplate from "@Components/templates/PageTemplate";
import SectionTemplate from "@Components/templates/SectionTemplate";
import { ErrorFallbackProps } from "./ErrorFallback.types";
import Paragraph from "@Components/atoms/Paragraph";
import { FallBackHeading, FallBackImg } from "./ErrorFallback.style";


const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <PageTemplate>
      <SectionTemplate>
        <FallBackImg src="/Images/page-not-found.jpg" alt="page not found"/>
        <FallBackHeading text="something went wrong..."/>
        {error && <Paragraph text={error.toString()}/>}
      </SectionTemplate>
    </PageTemplate>
  );
};

export default ErrorFallback;