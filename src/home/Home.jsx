import React from "react";
import { StyledContainer, StyledText } from "./Home.styled";

function generateRandomString() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

function Home() {
  return (
    <StyledContainer>
      <StyledText>{generateRandomString()}</StyledText>
    </StyledContainer>
  );
}

export default Home;
