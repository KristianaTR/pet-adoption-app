import { ReactNode } from "react";

export interface FormProps {
    initialValues: {
        email: string;
        password: string;
      };
    onSubmit: () => void;
    children: ReactNode;
}