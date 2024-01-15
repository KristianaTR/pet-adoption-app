import { ReactNode } from "react";

export interface PetCardProps {
    linkTo: string;
    children: ReactNode;
    imageUrl: string;
}