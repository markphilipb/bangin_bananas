import React from "react";
import styled from "styled-components";

const HeaderTitle = styled.h1`
  font-size: 400px;
  font-weight: normal;
  height: auto;
  letter-spacing: -0.05em;
  margin: 0px;

  @media only screen and (min-width: 1950px) {
    font-size: 300px;
  }
  @media only screen and (min-width: 1920px) and (max-width: 1950px) {
    font-size: 300px;
  }
  @media only screen and (min-width: 1700px) and (max-width: 1919px) {
    font-size: 300px;
  }
  @media only screen and (min-width: 1366px) and (max-width: 1699px) {
    font-size: 300px;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    font-size: 300px;
  }

  @media only screen and (min-width: 601px) and (max-width: 1023px) {
    font-size: 200px;
    padding: 0px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 150px;
    padding: 0px;
  }
`;

const HeaderMain = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
`;

function Header() {
  return (
    <HeaderMain>
      <HeaderTitle>Bangin Bananas</HeaderTitle>
    </HeaderMain>
  );
}

export default Header;
