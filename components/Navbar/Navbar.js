import React from "react";
import { Nav } from "./NavbarElements.js";
import Boop from "./logo.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Boop rotation={20} timing={200} tension={150} friction={10}>
          <img
            src="/imgs/bananalogo.png"
            style={{ width: 75, marginTop: -7 }}
          />
        </Boop>
      </Nav>
    </>
  );
};

export default Navbar;
