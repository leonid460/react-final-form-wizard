import { useState } from "react";
import { SidePanel } from "./SidePanel";
import * as Styled from "./styled";
import { Wizard } from "./Wizard";
import { MainStep } from "./steps/MainStep";
import { DocumentsStep } from "./steps/DocumentsStep";
import { EducationStep } from "./steps/EducationStep";

const stepsNames = ["Main", "Documents", "Education"];

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
          <EducationStep />
        </Wizard>
      </Styled.WizardWrapper>
      <SidePanel items={sidePanelItems} />
    </Styled.Container>
  );
};
