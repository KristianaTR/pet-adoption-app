import { size } from "Styles/Breakpoints";
import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 120px 40px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  display: flex;
  flex: 1;
  
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // min-height: 80vh;
  max-width: ${size.laptop};
  margin: auto;
`;