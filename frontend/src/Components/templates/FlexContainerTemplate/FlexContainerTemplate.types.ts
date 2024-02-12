import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
}
