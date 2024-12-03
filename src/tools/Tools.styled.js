import styled from "styled-components";
import { Link } from "react-router-dom";

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e8f5e9;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const ToolButton = styled(Link)`
  text-decoration: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #4caf50;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #66bb6a;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;