import styled, { css } from "styled-components";
import { CarouselSlideProps, CarouselProps } from "./Carousel.types";
import Button from "@Components/atoms/Button";

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  overflow: hidden;
`;

export const CarouselSlide = styled.div<CarouselSlideProps>`
  flex: 0 0 auto;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`;

export const CarouselSlides = styled.div<CarouselProps>`
  display: flex;
  ${(props) =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;

export const CarouselButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textDark};

`;
