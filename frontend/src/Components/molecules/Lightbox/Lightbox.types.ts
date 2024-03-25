import { ImageProps } from "@atoms/Image/Image.types";

export interface LightboxProps extends ImageProps {
    onClick: () => void;
    onPrevClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onNextClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}