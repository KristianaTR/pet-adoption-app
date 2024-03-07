import { IconProps } from "@Components/atoms/Icon/Icon.types";
import { ParagraphProps } from "@Components/atoms/Paragraph/Paragraph.types";

export interface PetDataCardProps extends IconProps, ParagraphProps {
    title: string;
    data: string | number;
}