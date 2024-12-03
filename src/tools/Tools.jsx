import React from "react";
import { ToolsContainer, Title, ToolButton } from "./Tools.styled";

function Tools() {
  return (
    <ToolsContainer>
      <Title>Tools</Title>
      <ToolButton id='create-standing-order-button' to="/create-standing-order">Set up a standing order</ToolButton>
    </ToolsContainer>
  );
}

export default Tools;