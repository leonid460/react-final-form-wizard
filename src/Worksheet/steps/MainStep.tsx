import { WizardStepContainer } from "./styled";
import { TextField } from "../../TextField";

export const MainStep = () => {
  return (
    <WizardStepContainer>
      <TextField name="firstName" label="First Name" />
      <TextField name="lastName" label="Last Name" />
      <TextField name="age" label="Age" type="number" />
    </WizardStepContainer>
  );
};
