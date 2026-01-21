import { useState } from "react";
import Divider from "../Divider/Divider";
import styles from "./Stepper.module.scss";
import { StepperContext, useStepper } from "./Stepper.provider";
import type {
  StepperContentProps,
  StepperItemIconProps,
  StepperItemProps,
  StepperItemTextProps,
  StepperProps,
} from "./Stepper.types";

export const Stepper = ({
  children,
  classes,
  defaultStepId = "",
  ...props
}: StepperProps) => {
  const [activeStepId, setActiveStepId] = useState<string>(defaultStepId);
  const [completedStepIds, setCompletedStepIds] = useState<string[]>([]);

  const handleActiveStepId = (stepId: string) => {
    setActiveStepId(stepId);
  };

  const handleCompletedStepId = (stepId: string) => {
    setCompletedStepIds((prev) => [...prev, stepId]);
  };

  return (
    <StepperContext
      value={{
        activeStepId,
        defaultStepId,
        completedStepIds,
        handleActiveStepId,
        handleCompletedStepId,
      }}
    >
      <div {...props} className={`${styles.Stepper} ${classes}`}>
        {children}
      </div>
    </StepperContext>
  );
};

export const StepperItemList = ({
  children,
  classes,
  ...props
}: StepperProps) => {
  return (
    <div {...props} className={`${styles.StepperTriggerList} ${classes}`}>
      {children}
    </div>
  );
};

const StepperItemIcon = ({
  classes,
  icon,
  state,
}: StepperItemIconProps) => {
  return (
    <div data-state={state} className={`${styles.StepperItemIcon} ${classes}`}>
      <img src={icon} alt="stepper icon" />
    </div>
  );
};

const StepperItemText = ({ classes, text }: StepperItemTextProps) => {
  return <p className={`${styles.StepperItemText} ${classes}`}>{text}</p>;
};

const StepperItemSubText = ({ classes, text }: StepperItemTextProps) => {
  return <p className={`${styles.StepperItemSubtext} ${classes}`}>{text}</p>;
};

export const StepperItem = ({
  activeIcon,
  completedIcon,
  stepperItemIcon,
  stepperItemText,
  stepId,
  stepperItemSubtext,
  classes,
  hideDivider,
}: StepperItemProps) => {
  const { activeStepId, completedStepIds, handleActiveStepId } = useStepper();
  const state =
    activeStepId === stepId
      ? "active"
      : completedStepIds.includes(stepId)
        ? "completed"
        : "inactive";
  const icon =
    state === "active"
      ? activeIcon
      : state === "completed"
        ? completedIcon
        : stepperItemIcon;

  return (
    <div
      className={`${styles.StepperItem} ${classes}`}
      onClick={() => handleActiveStepId(stepId)}
    >
      <div className={styles.StepperItemIconContainer}>
        <StepperItemIcon icon={icon} state={state} />
        {!hideDivider && (
          <div className={styles.DividerContainer}>
            <Divider
              orientation="vertical"
              height="100%"
              width="2px"
              color="var(--teal-600)"
            />
          </div>
        )}
      </div>
      <div className={styles.StepperItemTextContainer}>
        <StepperItemSubText text={stepperItemSubtext} />
        <StepperItemText text={stepperItemText} />
      </div>
    </div>
  );
};

export const StepperContent = ({
  children,
  classes,
  stepId,
  ...props
}: StepperContentProps) => {
  const { activeStepId } = useStepper();
  return (
    activeStepId === stepId && (
      <div {...props} className={`${styles.StepperContent} ${classes}`}>
        {children}
      </div>
    )
  );
};
