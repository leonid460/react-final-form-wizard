import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  border: 1px solid black;
  border-radius: 4px;
  overflow: hidden;
`;

export const ItemContainer = styled.div<{ isComplete?: boolean }>`
  padding: 8px;
  border-bottom: 1px solid;
  color: ${({ isComplete }) => (isComplete ? "white" : "black")};
  background: ${({ isComplete }) => (isComplete ? "green" : "white")};
  border-color: ${({ isComplete }) => (isComplete ? "black" : "#ccc")};
  cursor: pointer;
  font-size: 14px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #ebebeb;
  }
`;
