import { useState } from "react";
import { SidePanel } from "./SidePanel";
import * as Styled from "./styled";
import { Wizard } from "./Wizard";
import { MainStep } from "./MainStep";
import { DocumentsStep } from "./DocumentsStep";

const stepsNames = ["Main", "Documents"];

function makeSidePanelItems(
  stepsNamesList: string[],
  setStep: (step: number) => void
) {
  return stepsNamesList.map((name, index) => ({
    name,
    onClick: () => setStep(index)
  }));
}

export const Worksheet = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const sidePanelItems = makeSidePanelItems(stepsNames, setCurrentStep);
  const maxStep = stepsNames.length - 1;
  const isReadyToSubmit = currentStep === maxStep;

  const handleSubmit = () => {
    alert("*****");
  };

  return (
    <Styled.Container>
      <Styled.WizardWrapper>
        <Wizard
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          maxStep={maxStep}
          isReadyToSubmit={isReadyToSubmit}
          onSubmit={handleSubmit}
        >
          <MainStep />
          <DocumentsStep />
        </Wizard>
      </Styled.WizardWrapper>
      <SidePanel items={sidePanelItems} />
    </Styled.Container>
  );
};
