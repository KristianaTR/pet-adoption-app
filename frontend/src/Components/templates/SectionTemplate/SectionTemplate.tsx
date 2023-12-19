import styled from "styled-components";
import { SectionProps } from "./SectionTemplate.types";

const SectionContainer = styled.section`
  padding: 20px 40px;
  background-color: var(--background-light);
  margin-bottom: 20px;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTemplate = ({ children }: SectionProps) => {
  return <SectionContainer>{children}</SectionContainer>;
};

export default SectionTemplate;
