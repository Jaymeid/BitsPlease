import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e8f5e9;
  padding: 10px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border: 2px solid #00703c;
  border-radius: 8px;
  text-align: center;
  font-family: "Arial", sans-serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin: 0;
  font-family: "Courier New", monospace;
`;

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  width: 90%;
  max-width: 400px;
  margin: auto;
  height: 95%;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const Header = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 20px 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const BalanceSection = styled.div`
  margin: 20px 0;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const BalanceText = styled.div`
  font-size: 16px;
  color: #888;
`;

export const BalanceAmount = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 10px 0;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

export const ActionButton = styled.button`
  flex: 1;
  margin: 0 10px;
  padding: 15px;
  border-radius: 10px;
  border: none;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const TransactionsContainer = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TransactionHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const TransactionDetail = styled.div`
  font-size: 14px;
`;

export const TransactionAmount = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.type === "debit" ? "red" : "green")};
`;
