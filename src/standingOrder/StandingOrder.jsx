import React, { useState } from "react";
import {
  StandingOrderContainer,
  Form,
  Title,
  InputLabel,
  Input,
  ConfirmButton,
  AccountLabel,
  AccountSelect,
} from "./StandingOrder.styled";

function StandingOrder() {
  const [selectedAccount, setSelectedAccount] = useState("Current Account");

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  const [formData, setFormData] = useState({
    recipientName: "",
    accountNumber: "",
    amount: "",
    startDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Standing Order Details:", formData);
    alert("Standing order set up successfully!");
  };

  return (
    <StandingOrderContainer>
      <Form onSubmit={handleSubmit}>
        <AccountLabel htmlFor="accountSelect">Select Account</AccountLabel>
        <AccountSelect id = "account-select"
          
          value={selectedAccount}
          onChange={handleAccountChange}
        >
          <option id="account-1"  value="Checking Account">
            Current Account
          </option>
          <option id="account-2" value="Savings Account">
            Savings Account
          </option>
        </AccountSelect>

        <Title>Set Up Standing Order</Title>
        <InputLabel htmlFor="recipientName">Recipient's Name</InputLabel>
        <Input
          type="text"
          id="recipient-name-input"
          name="recipientName"
          value={formData.recipientName}
          onChange={handleChange}
          placeholder="Enter recipient's name"
          required
        />

        <InputLabel htmlFor="accountNumber">Account Number</InputLabel>
        <Input
          type="text"
          id="account-number-input"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          placeholder="Enter account number"
          required
        />

        <InputLabel htmlFor="amount">Amount ($)</InputLabel>
        <Input
          type="number"
          id="amount-input"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          required
        />

        <InputLabel htmlFor="startDate">Start Date</InputLabel>
        <Input
          type="date"
          id="start-date-input"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />

        <ConfirmButton id="confirm-button" type="submit">
          Confirm Standing Order
        </ConfirmButton>
      </Form>
    </StandingOrderContainer>
  );
}

export default StandingOrder;
