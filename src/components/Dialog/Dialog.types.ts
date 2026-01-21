export type RelativeTo = "screen" | "parent"

export type DialogProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: React.ReactNode;
  relativeTo?: RelativeTo
}

export type DialogContentProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right" | "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export type DialogTriggerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: React.ReactNode;
  classes?: string
}

export type DialogContext = {
  relativeTo: RelativeTo;
  visibility: boolean;
  toggleVisibility: () => void;
}