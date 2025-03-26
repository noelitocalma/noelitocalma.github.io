import { ReactNode } from "react";

export interface Page {
  label: string;
  path: string;
  slogan: string;
  icon: () => ReactNode
}