import Image from "@Components/atoms/Image";
import Heading from "@Components/atoms/Heading";
import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid rgb(236, 236, 243);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  box-shadow: ${({ theme }) => theme.boxShadow.minimal};
  padding: 16px;
  box-sizing: border-box;
  display: block;

  &:hover {
    transform: scale(1.04);
    box-shadow: ${({ theme }) => theme.boxShadow.hover};
  }

`;

export const CardImage = styled(Image)`
  width: 40px;
`;

export const CardHeading = styled(Heading)`
font-size: ${({ theme }) => theme.fontSize.larger};
`;
