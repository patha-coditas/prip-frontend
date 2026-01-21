export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant: "primary" | "secondary" | "outline" | "ghost" | "success";
  size: "sm" | "md" | "lg";
  classes?: string;
  children: React.ReactNode;
}