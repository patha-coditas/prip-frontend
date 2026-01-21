import styles from "./ApplicationForm.module.scss";
import type {
  ApplicationFormContentProps,
  ApplicationFormHeaderProps,
  ApplicationFormProps,
} from "./ApplicationForm.types";

export const ApplicationForm = ({
  children,
  classes = "",
  ...props
}: ApplicationFormProps) => {
  return (
    <div {...props} className={`${styles.ApplicationForm} ${classes}`}>
      {children}
    </div>
  );
};

export const ApplicationFormHeader = ({
  children,
  classes = "",
  ...props
}: ApplicationFormHeaderProps) => {
  return (
    <div {...props} className={`${styles.ApplicationFormHeaderContainer} ${classes}`}>
      <div className={styles.ApplicationFormHeader}>{children}</div>
    </div>
  );
};

export const ApplicationFormContent = ({
  children,
  classes = "",
  ...props
}: ApplicationFormContentProps) => {
  return (
    <div {...props} className={`${styles.ApplicationFormContentContainer} ${classes}`}>
      <div className={styles.ApplicationFormContent}>{children}</div>
    </div>
  );
};

export const Form = () => {
  return (
      <div className={styles.Form}>
        <div className={styles.FormNav}>
ehlloe
        </div>
        <div className={styles.FormContent}></div>
      </div>
  )
}