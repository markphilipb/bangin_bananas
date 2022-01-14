import React, { useState, useCallback } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import { Main } from "./HomeElements.js";
import dynamic from "next/dynamic";
const SplashPage = dynamic(() => import("../SplashPage/SplashPage.js"), {
  ssr: false,
});

const Home = () => {
  const [play, setPlay] = useState(false);

  return (
    <>
      <Main>
        <Navbar onClick={() => setPlay(play && false)} />
        <SplashPage playGif={play} />
      </Main>
    </>
  );
};

export default Home;
