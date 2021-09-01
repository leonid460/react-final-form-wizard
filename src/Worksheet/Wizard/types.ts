import { IWorksheetValues } from "../types";

export interface IWizardProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  maxStep: number;
  isReadyToSubmit: boolean;
  onSubmit: (values: IWorksheetValues) => void;
}

export interface IBottomButtonsProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  maxStep: number;
  isReadyToSubmit: boolean;
}
