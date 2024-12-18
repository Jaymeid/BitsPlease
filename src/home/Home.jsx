import React from "react";
import {
  Body,
  StyledContainer,
  StyledText,
  AppContainer,
  Header,
  BalanceSection,
  BalanceText,
  BalanceAmount,
  ActionsContainer,
  ActionButton,
  TransactionsContainer,
  Transaction,
  TransactionDetail,
  TransactionAmount,
  TransactionHeader
} from "./Home.styled";

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
    <>
      <StyledContainer>
        <StyledText>{generateRandomString()}</StyledText>
      </StyledContainer>
      <Body>
        <AppContainer>
          <Header>My Bank</Header>
          <BalanceSection>
            <BalanceText>Available Balance</BalanceText>
            <BalanceAmount id="balance-value">$12,345.67</BalanceAmount>
          </BalanceSection>
          <ActionsContainer>
            <ActionButton id="send-money-button">Send Money</ActionButton>
            <ActionButton id="pay-bills-button">Pay Bills</ActionButton>
            <ActionButton id="request-money-button">Request Money</ActionButton>
          </ActionsContainer>
          <TransactionsContainer>
            <TransactionHeader>Recent Transactions</TransactionHeader>
            <Transaction>
              <TransactionDetail id='transaction-id-1'>Amazon Purchase</TransactionDetail>
              <TransactionAmount id='transaction-amount-1' type="debit">- $123.45</TransactionAmount>
            </Transaction>
            <Transaction>
              <TransactionDetail id='transaction-id-2'>Paycheck Deposit</TransactionDetail>
              <TransactionAmount id='transaction-amount-2' type="credit">+ $1,500.00</TransactionAmount>
            </Transaction>
            <Transaction>
              <TransactionDetail id='transaction-id-3'>Starbucks</TransactionDetail>
              <TransactionAmount id='transaction-amount-3' type="debit">- $15.75</TransactionAmount>
            </Transaction>
          </TransactionsContainer>
        </AppContainer>
      </Body>
    </>
  );
}

export default Home;
