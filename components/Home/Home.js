import React from "react";
import styled from "styled-components";
import Header from "../Header/Header.js";
import About from "../About/About.js";
import Why from "../Why/Why.js";
import Schedule from "../Schedule/Schedule.js";
import Team from "../Team/Team.js";
import FAQ from "../FAQ/FAQ.js";

const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: calc(100vh - 100px);
  padding: 0.5rem calc((50vw - 1000px) / 2);
  box-sizing: border-box;
`;

const Home = () => {
  return (
    <HomeMain>
      <Header />
      <About />
      <Why />
      <Schedule />
      <Team />
      <FAQ />
    </HomeMain>
  );
};

export default Home;
