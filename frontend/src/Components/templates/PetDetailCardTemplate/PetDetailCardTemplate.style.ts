import styled from "styled-components";
import { device } from "Styles/Breakpoints";
import Image from "@Components/atoms/Image";

export const CardWrapper = styled.div`
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: 100px;
  display: flex;
  box-sizing: border-box;
  min-height: 100vh;
`;

export const CardContainer = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  margin: 40px;
  display: flex;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
`;

export const PhotoBlock = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 50%;
`;

export const Img = styled(Image)`
  min-width: 100%;
`;

export const DataBlock = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
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
`;
