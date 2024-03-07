import { IconProps } from "../Icon/Icon.types";

export interface ButtonProps extends Omit<IconProps, 'icon'>{
    text: string;
    icon?: IconProps['icon'];
    onClick?: () => void;
    className?: string;
}