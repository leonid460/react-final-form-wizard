import { ReactNode, Children } from "react";

export function getStepToRender(children: ReactNode, stepNumber: number) {
  const listOfSteps = Children.toArray(children);

  return listOfSteps[stepNumber];
}
