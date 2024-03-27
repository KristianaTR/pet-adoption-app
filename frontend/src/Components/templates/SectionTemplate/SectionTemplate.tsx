import { SectionProps } from "./SectionTemplate.types";
import { SectionWrapper, SectionContainer } from "./SectionTemplate.style";

const SectionTemplate = ({ children }: SectionProps) => {
  return (
    <SectionWrapper>
      <SectionContainer>{children}</SectionContainer>
    </SectionWrapper>
  )
};

export default SectionTemplate;
