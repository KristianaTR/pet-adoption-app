import styled from "styled-components";
import Image from "@Components/atoms/Image";
import { deviceMax } from "Styles/Breakpoints";

export const LightboxBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(102, 87, 75, 0.7);

  @media ${deviceMax.tablet} {
    overflow: hidden;
`;

export const LightboxBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 20px;
  width: 90%;
  height: 100%;

  @media ${deviceMax.mobileL} {
    padding: 0;
`;

export const LightboxImage = styled(Image)`
  height: 80%;
  max-width: 90vw;
  width: auto;
  object-fit: cover;

  @media ${deviceMax.tablet} {
    height: auto;
    width: 80%;
  }
`;
