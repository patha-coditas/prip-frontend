export type NavbarProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  children: React.ReactNode;
}

export type NavbarItemProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: React.ReactNode;
  active?: boolean;
}