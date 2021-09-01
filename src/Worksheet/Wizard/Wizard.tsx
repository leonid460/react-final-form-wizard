import { FC } from "react";
import { Form, FormSpy } from "react-final-form";
import { createForm } from "final-form";
import { BottomButtons } from "./BottomButtons";
import { IWizardProps } from "./types";
import { validate } from "../validate";
import { getStepToRender } from "./utils";
import { IWorksheetValues } from "../types";
import arrayMutators from "final-form-arrays";

function traverseFormFields(
  obj: { [key: string]: unknown },
  actionCB: (key: string) => void
) {
  const fieldsKeys = Object.keys(obj);

  fieldsKeys.forEach((key) => {
    actionCB(key);
  });
}

const mutators = { ...arrayMutators };

export const Wizard: FC<IWizardProps> = ({
  children,
  currentStep,
  setCurrentStep,
  maxStep,
  isReadyToSubmit,
  onSubmit
}) => {
  const form = createForm({
    onSubmit,
    validate,
    mutators
  });

  return (
    <Form onSubmit={onSubmit} form={form}>
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            {getStepToRender(children, currentStep)}
            <BottomButtons
              currentStep={currentStep}
              maxStep={maxStep}
              setCurrentStep={setCurrentStep}
              isReadyToSubmit={isReadyToSubmit}
            />
            <FormSpy
              subscription={{
                values: true,
                errors: true
              }}
            >
              {({ form, errors }) => {
                const typeSafeErrors = errors || {};
                const registered = form.getRegisteredFields();

                traverseFormFields(typeSafeErrors, (key) => {
                  const typeSafeKey = (key as unknown) as keyof IWorksheetValues;

                  if (registered.indexOf(typeSafeKey) !== -1) {
                    return null;
                  }

                  console.log(typeSafeKey);

                  setTimeout(() => {
                    form.registerField(typeSafeKey, () => {}, {
                      active: true,
                      dirty: true,
                      touched: true,
                      valid: true,
                      value: true
                    });
                  });
                });

                return null;
              }}
            </FormSpy>
          </form>
        );
      }}
    </Form>
  );
};
