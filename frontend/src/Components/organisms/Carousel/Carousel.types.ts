import { ReactNode } from "react";

export interface CarouselProps {
  children: ReactNode | ReactNode[];
  currentSlide?: number;
}

export interface CarouselSlideProps {
  active?: boolean;
}
