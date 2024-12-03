import React from "react";
import CollApp from "./CollApp/collApp.component";
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <CollApp/> 
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
`;