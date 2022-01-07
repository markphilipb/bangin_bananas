import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import { Main } from "./HomeElements.js";
import SplashPage from "../SplashPage/SplashPage.js";

const Home = () => {
  return (
    <>
      <Main>
        <Navbar />
        <SplashPage />
      </Main>
    </>
  );
};

export default Home;
