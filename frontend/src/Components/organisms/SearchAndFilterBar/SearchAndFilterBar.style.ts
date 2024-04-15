import styled from "styled-components";

export const SearchAndFilterBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
`;

export const SearchAndFilterBarHeading = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
