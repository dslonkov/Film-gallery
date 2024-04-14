import {ReactNode, MouseEvent} from "react";

export type ButtonProps = {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  invisible?: boolean;
  type?: string;
};
