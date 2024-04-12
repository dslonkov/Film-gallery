import {ChangeEvent} from "react";

export type InputProps = {
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  withIcon?: boolean;
}
