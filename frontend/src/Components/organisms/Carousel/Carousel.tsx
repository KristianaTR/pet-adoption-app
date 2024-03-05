import { useState } from "react";
import {
  CarouselWrapper,
  CarouselSlide,
  CarouselSlides,
  CarouselButton,
} from "./Carousel.style";
import { CarouselProps } from "./Carousel.types";
import React from "react";
import FlexContainerTemplate from "@Components/templates/FlexContainerTemplate";

const Carousel = ({ children }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   const activeSlide = Array.isArray(children) ? children : [children];

  const activeSlide = children
    ? React.Children.map(children, (slide, index) => (
        <CarouselSlide active={currentSlide === index} key={index}>
          {slide}
        </CarouselSlide>
      ))
    : null;

  return (
    <>
      <CarouselWrapper>
        <CarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </CarouselSlides>
        <FlexContainerTemplate justifyContent="center" alignItems="center">
            <CarouselButton
                text="&#10218;"
                onClick={() => {
                    if (activeSlide) {
                        setCurrentSlide(
                        (currentSlide - 1 + activeSlide.length) % activeSlide.length
                        );
                    }
                }}
            />
            <CarouselButton
                text="&#10219;"
                onClick={() => {
                    if (activeSlide) {
                        setCurrentSlide((currentSlide + 1) % activeSlide.length);
                    }
                }}
            />
        </FlexContainerTemplate>
      </CarouselWrapper>
    </>
  );
};

export default Carousel;
