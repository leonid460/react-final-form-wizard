import { WizardStepContainer } from "./styled";
import { TextField } from "../../TextField";

export const DocumentsStep = () => {
  return (
    <WizardStepContainer>
      <TextField name="series" label="Series" />
      <TextField name="number" label="Number" />
      <TextField name="placeOfIssue" label="Place of Issue" />
    </WizardStepContainer>
  );
};
