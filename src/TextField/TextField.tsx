import { Field } from "react-final-form";
import * as Styled from "./styled";

interface ITextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputElement["type"];
}

export const TextField = ({
  name,
  label,
  placeholder,
  type
}: ITextFieldProps) => {
  return (
    <Field name={name}>
      {({ input, meta }) => {
        const errorMessage = meta.error;
        const isTocuhed = meta.touched;
        const isInvalid = !!(errorMessage && isTocuhed);

        return (
          <Styled.Container>
            <Styled.LabelText>{label}</Styled.LabelText>
            <Styled.Input {...input} placeholder={placeholder} type={type} />
            <Styled.ErrorText>{isInvalid ? errorMessage : ""}</Styled.ErrorText>
          </Styled.Container>
        );
      }}
    </Field>
  );
};
