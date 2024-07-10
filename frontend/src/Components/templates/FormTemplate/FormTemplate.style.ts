import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  gap: 20px;
  align-items: center;
  height: 100%;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;
