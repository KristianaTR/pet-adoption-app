import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0;
  padding: 20px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
`;