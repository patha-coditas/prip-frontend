import styles from "./Divider.module.scss"
import type { DividerProps } from "./Divider.types"

const Divider = ({ orientation = "horizontal", classes = "", width = "1px", height = "100%", color = "#000", ...props }: DividerProps) => {
  return (
    <div {...props} data-orientation={orientation} className={`${styles.Divider} ${classes}`} style={{ width, height, backgroundColor: color }} />
  )
}

export default Divider
