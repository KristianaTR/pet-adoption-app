import { MouseEventHandler } from "react";
import { IconProps } from "../Icon/Icon.types";

export interface ButtonProps {
    text: string | number;
    variant?: IconProps['variant'];
    icon?: IconProps['icon'];
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}
