import Heading from "@Components/atoms/Heading";
import { deviceMax } from "Styles/Breakpoints";
import styled from "styled-components";

export const PageContainer = styled.div`
  background-image: url("/Images/dog-paw.svg");
  background-repeat: space;
  padding: 120px 40px;
  display: flex;
  flex: 1; 
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const PageHeading = styled(Heading)`
  text-transform: uppercase;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.superLarge};
  @media ${deviceMax.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.extraExtraLarge};
  }
`;
