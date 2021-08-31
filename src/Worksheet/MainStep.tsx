import { WizardStepContainer } from "./common-styled";
import { TextField } from "../TextField";

export const MainStep = () => {
  return (
    <WizardStepContainer>
      <TextField name="first-name" label="First Name" />
      <TextField name="last-name" label="Last Name" />
      <TextField name="age" label="Age" type="number" />
    </WizardStepContainer>
  );
};
