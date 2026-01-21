import styles from "./UserMenu.module.scss"
import type { UserMenuFooterProps, UserMenuHeaderProps, UserMenuProps } from "./UserMenu.types"

export const UserMenu = ({ children, classes = "", ...props }: UserMenuProps) => {
  return (
    <div {...props} className={`${styles.UserMenu} ${classes}`} >
      {children}
    </div>
  )
}

export const UserMenuHeader = ({ children, classes = "", ...props }: UserMenuHeaderProps) => {
  return (
    <div {...props} className={`${styles.UserMenuHeader} ${classes}`}>
      {children}
    </div>
  )
}

export const UserMenuFooter = ({ children, classes = "", ...props }: UserMenuFooterProps) => {
  return (
    <div {...props} className={`${styles.UserMenuFooter} ${classes}`}>
      {children}
    </div>
  )
}