import {
  WizardStepContainer,
  WizardStepBlockContainer,
  AddBlockButton
} from "./styled";
import { TextField } from "../../TextField";
import { FieldArray } from "react-final-form-arrays";

const EducationBlock = ({ name }: { name: string }) => {
  return (
    <WizardStepBlockContainer>
      <TextField name={`${name}beginYear`} label="Begin year" />
      <TextField name={`${name}endYear`} label="End year" />
      <TextField name={`${name}place`} label="Place" />
    </WizardStepBlockContainer>
  );
};

export const EducationStep = () => {
  return (
    <WizardStepContainer>
      <FieldArray name="education">
        {({ fields }) => (
          <>
            {fields.map((name) => (
              <EducationBlock name={name} key={name} />
            ))}
            <AddBlockButton onClick={() => fields.push({})}>
              add education
            </AddBlockButton>
          </>
        )}
      </FieldArray>
    </WizardStepContainer>
  );
};
