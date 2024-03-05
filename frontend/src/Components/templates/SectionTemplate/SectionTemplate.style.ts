import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

//   &:first-child {
//     padding-top: 90px;
//   }
`;