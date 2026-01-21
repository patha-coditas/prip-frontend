import { createContext, useContext, useState } from "react";
import { type TabContext } from "./Tab.types";

const TabContext = createContext<TabContext | null>(null);

export const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTabId, setActiveTabId] = useState<string | number | null>(null)

  const handleTabChange = (tabId: string | number) => {
    setActiveTabId(tabId)
  }
  
  return (
    <TabContext value={{ activeTabId, handleTabChange }}>
      {children}
    </TabContext>
  )
}

export const useTab = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error("useTab must be used within a TabProvider")
  }
  return context
}