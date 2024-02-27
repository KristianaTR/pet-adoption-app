import Image from "@Components/atoms/Image";
import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid rgb(236, 236, 243);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  padding: 16px;
  box-sizing: border-box;
  display: block;
`;

export const CardImage = styled(Image)`
  width: 50px;
`;
