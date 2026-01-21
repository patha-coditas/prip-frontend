import type { InputProps } from "../Input/Input.types";

export type InputWithLabelProps = InputProps & {
  label: string;
  labelClasses?: string;
}