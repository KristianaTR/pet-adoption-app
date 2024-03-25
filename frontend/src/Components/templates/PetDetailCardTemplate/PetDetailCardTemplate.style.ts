import styled from "styled-components";
import { deviceMax } from "Styles/Breakpoints";
import Image from "@Components/atoms/Image";

export const CardWrapper = styled.div`
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: 100px;
  display: flex;
  box-sizing: border-box;
  max-height: 100vh;

  @media ${deviceMax.tablet} {
    max-height: fit-content;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  margin: 40px;
  display: flex;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};

  @media ${deviceMax.tablet} {
    margin: 40px 0;
    flex-flow: column-reverse;
  }
`;

export const Img = styled(Image)`
  min-width: 100%;
`;

export const GaleryBlock = styled.div`
  padding: 20px;
  display: flex;
  width: 50%;
  @media ${deviceMax.tablet} {
    width: 100%;
  }
`;

export const DataBlock = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  width: 50%;
  @media ${deviceMax.tablet} {
    width: 100%;
  }
`;

export const FlexContainerBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const DescriptionInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GeneralInfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  width: 100%;

  @media ${deviceMax.tablet} {
    grid-template: 1fr / repeat(6, 1fr);
  }
`;
