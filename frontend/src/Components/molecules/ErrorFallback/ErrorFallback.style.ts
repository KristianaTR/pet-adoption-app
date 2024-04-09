import Heading from "@Components/atoms/Heading";
import Image from "@Components/atoms/Image";
import { deviceMax } from "Styles/Breakpoints";
import styled from "styled-components";

export const FallBackImg = styled(Image)`
  border-radius: 20px;
  width: 60%;

  @media ${deviceMax.mobileLandscape} {
    width: 90%;
    height: 200px;
    object-fit: cover;
  }
`;

export const FallBackHeading = styled(Heading)`
  text-align: center;
`;
