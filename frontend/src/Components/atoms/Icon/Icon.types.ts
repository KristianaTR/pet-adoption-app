import { MouseEventHandler, ReactNode } from "react";

export interface IconProps {
  src?: string; 
  alt?: string;
  width?: string;
  height?: string;
  color?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<SVGElement>;
}
