import React from "react";
import styled from "styled-components";

const HeaderTitle = styled.h1`
  font-size: 300px;
  font-weight: normal;
  height: auto;
  letter-spacing: -0.05em;
  margin: 0px;
`;

const HeaderMain = styled.div`
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderMain>
      <HeaderTitle>Bangin Bananas</HeaderTitle>
    </HeaderMain>
  );
}

export default Header;
