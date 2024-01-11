import styled from "styled-components";

export const StyledGridTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 300px);
  gap: 20px;
`;