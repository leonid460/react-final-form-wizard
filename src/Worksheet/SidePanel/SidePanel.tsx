import React from "react";
import * as Styled from "./styled";

type TSidePanelItem = {
  name: string;
  onClick: () => void;
  isComplete?: boolean;
};

interface ISidePanelProps {
  items: TSidePanelItem[];
}

export const SidePanel = ({ items }: ISidePanelProps) => {
  return (
    <Styled.Container>
      {items.map(({ name, isComplete, onClick }) => (
        <Styled.ItemContainer
          key={name}
          isComplete={isComplete}
          onClick={onClick}
        >
          {name}
        </Styled.ItemContainer>
      ))}
    </Styled.Container>
  );
};
