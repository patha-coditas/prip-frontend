import { createContext, useContext } from "react"
import { type StepperContext as StepperContextType } from "./Stepper.types"

export const StepperContext = createContext<StepperContextType | null>(null)

export const useStepper = () => {
  const context = useContext(StepperContext)

  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider")
  }

  return context
}