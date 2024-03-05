import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  color?: string;
  icon: string;
}
