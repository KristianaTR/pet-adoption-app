import { size } from "Styles/Breakpoints";
import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: 100px;
  
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${size.laptop};
  margin: auto;
`;