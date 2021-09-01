import styled from "styled-components";

export const WizardStepContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WizardStepBlockContainer = styled(WizardStepContainer)`
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const AddBlockButton = styled.span`
  margin-bottom: 8px;
  color: blue;
  cursor: pointer;
`;
