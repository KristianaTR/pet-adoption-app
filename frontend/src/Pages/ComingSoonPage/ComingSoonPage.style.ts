import Button from "@Components/atoms/Button";
import Heading from "@Components/atoms/Heading";
import { deviceMax } from "Styles/Breakpoints";
import styled from "styled-components";

export const PageContainer = styled.div`
  background-image: url("/Images/dog-paw.svg");
  background-repeat: space;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 10%;
`;

export const PageHeading = styled(Heading)`
  text-transform: uppercase;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.superLarge};
  @media ${deviceMax.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.extraExtraLarge};
  }
`;

export const PageBtn = styled(Button)`
  text-transform: uppercase;
`;

export const PageCopyrightNotice = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.large};
`;
