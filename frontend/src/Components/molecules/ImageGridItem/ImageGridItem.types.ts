import { ImageProps } from "@atoms/Image/Image.types";

export interface ImageGridItemProps extends ImageProps {
    onClick?: () => void;
}