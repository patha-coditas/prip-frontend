import styles from "./Input.module.scss"
import type { InputProps } from "./Input.types"

const Input = ({ classes = "", ...props }: InputProps) => {
  return (
    <input {...props} className={`${styles.Input} ${classes}`} />
  )
}

export default Input
