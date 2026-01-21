import styles from "./Button.module.scss"
import type { ButtonProps } from "./Button.types"

const Button = ({children, variant, size, classes, ...props}: ButtonProps) => {
  return (
    <button {...props} data-variant={variant} data-size={size} className={`${styles.Button} ${classes}`}>{children}</button>
  )
}

export default Button
