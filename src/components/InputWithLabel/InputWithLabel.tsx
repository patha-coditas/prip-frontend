import Input from "../Input/Input";
import styles from "./InputWithLabel.module.scss";
import type { InputWithLabelProps } from "./InputWithLabel.types";

const InputWithLabel = ({
  label,
  required,
  labelClasses = "",
  ...props
}: InputWithLabelProps) => {
  return (
    <label className={styles.InputWithLabel}>
      <p className={styles.Label}>{required ? `${label}*` : label}</p>
      <Input {...props} required={required} />
    </label>
  );
};

export default InputWithLabel;
