import Button from "@Components/atoms/Button";
import Paragraph from "@Components/atoms/Paragraph";
import { deviceMax } from "Styles/Breakpoints";
import { slideIn, slideOut } from "Styles/Keyframes";
import styled, { css, keyframes } from "styled-components";
import { FilterPanelProps } from "./FilterPanel.types";

const slideAnimation = keyframes<FilterPanelProps>`
  0% {
    transform: translateY(${({ isOpen }) => (isOpen ? '-100%' : '100%')});
    opacity: 0;
  }
  20% {
    transform: translateY(${({ isOpen }) => (isOpen ? '-20%' : '20%')});
    opacity: 0.2;
  }
  40% {
    transform: translateY(${({ isOpen }) => (isOpen ? '-40%' : '40%')});
    opacity: 0.4;
  }
  60% {
    transform: translateY(${({ isOpen }) => (isOpen ? '-60%' : '60%')});
    opacity: 1;
  }
  80% {
    transform: translateY(${({ isOpen }) => (isOpen ? '-80%' : '80%')});
    opacity: 1;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const FilterPanelContainer = styled.div<FilterPanelProps>`
  display: flex;
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  animation: ${({ isOpen }) =>
    isOpen
      ? css`${slideAnimation} 0.8s ease-in-out forwards`
      : 'none'};
`;

export const FilterName = styled(Paragraph)`
  font-weight: 500;
`;

export const FilterItem = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.textWhite};

  @media ${deviceMax.mobileLandscape} {
    flex-wrap: wrap-reverse;
    width: 100%;
  }
`;

export const FilterBtnContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: flex-start;

  @media ${deviceMax.mobileLandscape} {
    gap: 10px;
  }

  @media ${deviceMax.mobileL} {
    flex-direction: column;
  }
`;

export const FilterBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  color: ${({ theme }) => theme.colors.textGrey};
  border-radius: 8px;

  @media ${deviceMax.mobileL} {
    width: auto;
    justify-content: center;
  }
`;

export const ActionBtnContainer = styled.div`
  display: flex;
  gap: 20px;

  @media ${deviceMax.mobileL} {
    width: 100%;
    justify-content: space-between;
  }
`;
