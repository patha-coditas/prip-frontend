import styles from "./Tab.module.scss";
import { TabProvider, useTab } from "./Tab.provider";
import type { TabContentProps, TabProps, TabTriggerProps } from "./Tab.types";

const Tab = ({ children, classes = "", ...props }: TabProps) => {
  return (
    <TabProvider>
      <div {...props} className={`${styles.Tab} ${classes}`}>
        {children}
      </div>
    </TabProvider>
  );
};

export const TabTrigger = ({
  children,
  tabId,
  classes = "",
  ...props
}: TabTriggerProps) => {
  const { handleTabChange } = useTab()
  return (
    <div {...props} onClick={() => handleTabChange(tabId)} className={`${styles.TabTrigger} ${classes}`}>
      {children}
    </div>
  );
};

export const TabContent = ({
  children,
  tabId,
  classes = "",
  ...props
}: TabContentProps) => {
  const { activeTabId } = useTab()
  return (
    <div {...props} className={`${styles.TabContent} ${classes}`}>
      {activeTabId === tabId && children}
    </div>
  );
};
export default Tab;
