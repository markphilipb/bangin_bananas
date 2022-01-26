import Home from "../components/Home/Home.js";
import React, { useEffect } from "react";
import Head from "next/head";
import SplashPage from "../components/SplashPage/SplashPage.js";

function App() {
  return (
    <>
      <Head>
        <title>Bangin Bananas</title>
        <link rel="icon" href="/imgs/bananalogo.png" />
        <link rel="apple-touch-icon" href="/imgs/bananalogo.png" />
        <meta charset="UTF-8" />
      </Head>
      <Home />
    </>
  );
}

export default App;
