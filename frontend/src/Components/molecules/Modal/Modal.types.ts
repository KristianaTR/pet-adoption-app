import { ReactNode } from "react";

export interface ModalProps {
    showModal: boolean;
    onRequestClose: () => void;
    children: ReactNode;
}