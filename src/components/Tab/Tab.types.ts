export type TabProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: React.ReactNode;
  classes?: string;
}

export type TabTriggerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: React.ReactNode;
  classes?: string;
  tabId: string|number;
}

export type TabContentProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: React.ReactNode;
  classes?: string;
  tabId: string|number;
}

export type TabContext = {
  activeTabId: string | number | null;
  handleTabChange: (tabId: string | number) => void;
}