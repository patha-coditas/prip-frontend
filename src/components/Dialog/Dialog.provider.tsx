import {
  createContext,
  useContext,
} from "react";
import { type DialogContext as DialogContextType } from "./Dialog.types";

export const DialogContext = createContext<DialogContextType>({
  relativeTo: "screen",
  visibility: false,
  toggleVisibility: () => {},
});

export const useDialog = () => {
  return useContext(DialogContext);
};
