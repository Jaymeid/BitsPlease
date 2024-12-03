import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f7f7f7; /* Light gray background */
  border: 2px solid #00703c; /* Lloyds Bank green border */
  border-radius: 8px; /* Rounded corners */
  text-align: center;
  font-family: "Arial", sans-serif; /* Lloyds Bank-like font */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333333; /* Dark text for clarity */
  margin: 0;
  font-family: "Courier New", monospace; /* Monospace font for session ID */
`;
