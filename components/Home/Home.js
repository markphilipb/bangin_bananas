import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import { Main } from "./HomeElements.js";
import dynamic from "next/dynamic";
import SplashPage from "../SplashPage/SplashPage.js";
// const SplashPage = dynamic(() => import("../SplashPage/SplashPage.js"), {
//   ssr: false,
// });

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
