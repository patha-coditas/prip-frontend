export type DividerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
  classes?: string;
  width?: string;
  height?: string;
  color?: string;
}