import { ComponentPropsWithRef} from "react";

export type PetTypeIconT = 
  "dog" |
  "cat" | 
  "rabbit" |
  "smallAndFurry" |
  "aquarium" |
  "horse" |
  "bird" |
  "farm"
;

export type PetDataIconT = 
  "age" |
  "gender" | 
  "id" | 
  "size" | 
  "breed" |
  "status" 
;

export type CommonIconT =  
  "paw" |
  "heart" |
  "back" |
  "female" | 
  "male" |
  "login"
;

export type IconType = 
  PetTypeIconT |
  PetDataIconT |
  CommonIconT
;

export type VariantType = "petType" | "petData" | "common";

export interface IconProps extends ComponentPropsWithRef<'svg'>  {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
  icon: string;
  variant: VariantType;
}
