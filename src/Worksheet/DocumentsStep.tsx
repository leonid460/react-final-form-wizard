import { WizardStepContainer } from "./common-styled";
import { TextField } from "../TextField";

export const DocumentsStep = () => {
  return (
    <WizardStepContainer>
      <TextField name="series" label="Series" />
      <TextField name="number" label="Number" />
      <TextField name="place-of-issue" label="Place of Issue" />
    </WizardStepContainer>
  );
};
