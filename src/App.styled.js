import styled from "styled-components";

export const CaptureButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: fixed;
  bottom: 70px;  /* Adjust based on navbar height */
  right: 20px;   /* Adjust position from the right */
  z-index: 10;   /* Ensure it appears above other content */

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.95);
  }
`;