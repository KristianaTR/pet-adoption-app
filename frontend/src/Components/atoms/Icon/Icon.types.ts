import { ComponentPropsWithRef} from "react";

export type IconType = 
  "paw" |
  "heart" |
  "back" |
  "female" | 
  "male" | 
  "age" |
  "gender" | 
  "id" | 
  "size" | 
  "breed" |
  "status" ;

export interface IconProps extends ComponentPropsWithRef<'svg'>  {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
  icon: IconType;
}
