import React from "react";
import { Nav, logoImage } from "./NavbarElements.js";
import logo from "../../imgs/bananalogo.png";
import Boop from "./logo.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Boop rotation={20} timing={200}>
          <img src={logo} style={{ width: 75, marginTop: -7 }} />
        </Boop>
      </Nav>
    </>
  );
};

export default Navbar;
