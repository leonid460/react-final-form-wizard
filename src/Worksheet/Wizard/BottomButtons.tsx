import { IBottomButtonsProps } from "./types";
import { Button } from "../../Button";

export const BottomButtons = ({
  currentStep,
  setCurrentStep,
  maxStep,
  isReadyToSubmit
}: IBottomButtonsProps) => {
  const handleGoBack = () => setCurrentStep(currentStep - 1);
  const handleGoForward = () => setCurrentStep(currentStep + 1);

  return (
    <>
      {currentStep > 0 && (
        <Button type="button" onClick={handleGoBack}>
          Prev Step
        </Button>
      )}
      {currentStep < maxStep && (
        <Button type="button" onClick={handleGoForward}>
          Next Step
        </Button>
      )}
      {isReadyToSubmit && (
        <Button type="submit" isPrimary>
          Submit
        </Button>
      )}
    </>
  );
};
