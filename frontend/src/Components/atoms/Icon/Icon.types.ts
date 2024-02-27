import { MouseEventHandler, ReactNode } from "react";

export interface IconProps {
  alt?: string;
  width?: string;
  height?: string;
  color?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<SVGElement>;
}
