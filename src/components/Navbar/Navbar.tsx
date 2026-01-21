import styles from "./Navbar.module.scss"
import type { NavbarItemProps, NavbarProps } from "./Navbar.types"

export const Navbar = ({children, ...props}: NavbarProps) => {
  return (
    <nav className={styles.Navbar} {...props}>
      {children}
    </nav>
  )
}

export const NavbarItem = ({children, active = false, ...props}: NavbarItemProps) => {
  return (
    <div data-active={active} className={styles.NavbarItem} {...props}>
      {children}
    </div>
  )
}
