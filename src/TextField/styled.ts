import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  flex-direction: column;
`;

const DescriptionText = styled.span`
  height: 18px;
  min-width: 2px;
  font-size: 14px;
  line-height: 18px;
`;

export const LabelText = styled(DescriptionText)`
  margin-bottom: 2px;
  color: black;
`;

export const ErrorText = styled(DescriptionText)`
  margin-top: 2px;
  color: red;
`;

export const Input = styled.input`
  flex: 1;
  padding: 3px 5px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
