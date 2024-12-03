import styled from "styled-components";

export const Navbar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #4caf50;
  color: white;
  padding: 15px 0;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

export const NavItem = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #66bb6a;
  }
`;
