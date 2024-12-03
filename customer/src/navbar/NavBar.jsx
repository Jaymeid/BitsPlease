import React from "react";
import { Navbar, NavItem } from "./NavBar.styled";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar>
      <NavItem
        id="home-navigate-button"
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </NavItem>
      <NavItem
        id="tools-navigate-button"
        onClick={() => {
          navigate("/tools");
        }}
      >
        Tools
      </NavItem>
    </Navbar>
  );
}

export default NavBar;
