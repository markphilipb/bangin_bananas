import React from "react";
import dynamic from "next/dynamic";
import Header from "../Header/Header.js";
import About from "../About/About.js";
import Why from "../Why/Why.js";
import Schedule from "../Schedule/Schedule.js";
import Team from "../Team/Team.js";
import FAQ from "../FAQ/FAQ.js";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Why />
      <Schedule />
      <Team />
      <FAQ />
    </>
  );
};

export default Home;
