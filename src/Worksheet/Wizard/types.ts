export interface IWizardProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  maxStep: number;
  isReadyToSubmit: boolean;
  onSubmit: () => void;
}
