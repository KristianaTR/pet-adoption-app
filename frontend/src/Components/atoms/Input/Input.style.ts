import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 10px 20px 10px 10px;
  border: 1px solid ${({ theme }) => theme.colors.textGrey};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fonts.main};
  outline: none;
  &::placeholder {
    overflow: visible;
  }
`;