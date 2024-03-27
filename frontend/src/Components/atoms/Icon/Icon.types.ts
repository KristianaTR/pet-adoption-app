import { ComponentPropsWithRef} from "react";

type PetTypeIconT = 
  "dog" |
  "cat" | 
  "rabbit" |
  "smallAndFurry" |
  "aquarium" |
  "horse" |
  "bird" |
  "farm"
;

type PetDataIconT = 
  "age" |
  "gender" | 
  "id" | 
  "size" | 
  "breed" |
  "status" 
;

type CommonIconT =  
  "paw" |
  "heart" |
  "back" |
  "female" | 
  "male"
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
  icon: IconType;
  variant: VariantType;
}
