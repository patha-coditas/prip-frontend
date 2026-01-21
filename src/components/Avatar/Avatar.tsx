import styles from "./Avatar.module.scss"
import { type AvatarProps } from "./Avatar.types"

const Avatar = ({ avatarImage, initial }: AvatarProps) => {
  return (
    <div className={styles.Avatar}>
      {avatarImage ? <img className={styles.AvatarImage} src={avatarImage} alt="User avatar" /> : <span>{initial}</span>}
    </div>
  )
}

export default Avatar
