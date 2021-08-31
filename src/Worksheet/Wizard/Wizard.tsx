import { FC, ReactNode, Children } from "react";
import { Form } from "react-final-form";
import { Button } from "../../Button";
import { IWizardProps } from "./types";

function getStepToRender(children: ReactNode, stepNumber: number) {
  const listOfSteps = Children.toArray(children);

  return listOfSteps[stepNumber];
}

interface IBottomButtonsProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  maxStep: number;
  isReadyToSubmit: boolean;
}

const BottomButtons = ({
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

export const Wizard: FC<IWizardProps> = ({
  children,
  currentStep,
  setCurrentStep,
  maxStep,
  isReadyToSubmit,
  onSubmit
}) => {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {getStepToRender(children, currentStep)}
          <BottomButtons
            currentStep={currentStep}
            maxStep={maxStep}
            setCurrentStep={setCurrentStep}
            isReadyToSubmit={isReadyToSubmit}
          />
        </form>
      )}
    </Form>
  );
};
