import { useState } from "react";
import styles from "./Dialog.module.scss";

import { DialogContext, useDialog } from "./Dialog.provider";
import type {
  DialogContentProps,
  DialogProps,
  DialogTriggerProps,
} from "./Dialog.types";

export const Dialog = ({ children, relativeTo = "screen", ...props }: DialogProps) => {
  const [visibility, setVisibility] = useState(false);
  const toggleVisibility = () => setVisibility(!visibility);

  return (
    <DialogContext value={{ relativeTo, visibility, toggleVisibility }}>
      <div data-relative-to={relativeTo} className={styles.Dialog} {...props}>
        {children}
      </div>
    </DialogContext>
  );
};

export const DialogTrigger = ({ classes, children, ...props }: DialogTriggerProps) => {
  const { toggleVisibility} = useDialog();

  return (
    <div {...props} onClick={toggleVisibility} className={classes}>
      {children}
    </div>
  );
};

export const DialogContent = ({ children, position = "center", ...props }: DialogContentProps) => {
  const { visibility, relativeTo } = useDialog();
  console.log(relativeTo);
  console.log(position);

  return (
    <div data-visible={visibility} data-relative-to={relativeTo} data-position={position} className={styles.DialogContent} {...props}>
      {children}
    </div>
  );
};

