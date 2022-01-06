import React from "react";
import { Nav, logoImage } from "./NavbarElements.js";
import logo from "../../imgs/bananalogo.jpg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <img src={logo} style={{ width: 100, marginTop: -7 }} />
      </Nav>
    </>
  );
};

export default Navbar;
