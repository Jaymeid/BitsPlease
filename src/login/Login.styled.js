import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #00703c;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #005a2c;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }

  &:disabled {
    background-color: #c4c4c4;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333333;
  margin-bottom: 8px;
  display: block;
  font-weight: 600;
`;

export const StyledInput = styled.input`
  width: 80%;
  padding: 12px 16px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 14px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #00703c;
    box-shadow: 0 0 0 3px rgba(0, 112, 60, 0.2);
    outline: none;
  }
`;

export const StyledLogo = styled.img`
  width: 10%;
  height: auto;
`;
