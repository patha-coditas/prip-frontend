type StepperState = "active" | "completed" | "inactive";

export type StepperProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode;
  classes?: string;
  defaultStepId?: string;
};

export type StepperItemProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  activeIcon: string;
  completedIcon: string;
  stepperItemIcon: string;
  stepperItemText: string;
  stepperItemSubtext: string;
  stepId: string;
  hideDivider?: boolean;
  classes?: string;
};

export type StepperItemIconProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  classes?: string;
  icon: string;
  state: StepperState;
};

export type StepperItemTextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  classes?: string;
  text: string;
};

export type StepperContentProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  classes?: string;
  stepId: string;
};

export type StepperContext = {
  activeStepId: string;
  defaultStepId: string;
  completedStepIds: string[];
  handleActiveStepId: (stepId: string) => void
  handleCompletedStepId: (stepId: string) => void
}

