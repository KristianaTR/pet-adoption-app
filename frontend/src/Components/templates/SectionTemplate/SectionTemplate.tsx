import { SectionProps } from './SectionTemplate.types';
import { SectionContainer } from './SectionTemplate.style';

const SectionTemplate = ({ children }: SectionProps) => {
  return <SectionContainer>{children}</SectionContainer>;
};

export default SectionTemplate;
