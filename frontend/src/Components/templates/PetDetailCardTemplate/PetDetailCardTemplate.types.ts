import { ReactNode } from "react";

export interface PetDetailCardProps {
    photos?: ReactNode;
    children?: ReactNode;
    card?: ReactNode;
    dogName?: string;
}