import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledButton,
  FormContainer,
  Label,
  StyledInput,
  StyledLogo
} from "./Login.styled";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/home');
  };
  return (
    <>
      <StyledLogo src="/lloydsLogo.avif" alt="Lloyds Banking Group Logo" />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="username">Username</Label>
          <StyledInput
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />

          <Label htmlFor="password">Password</Label>
          <StyledInput
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <StyledButton type="submit">Login</StyledButton>
        </form>
      </FormContainer>
    </>
  );
}

export default Login;
