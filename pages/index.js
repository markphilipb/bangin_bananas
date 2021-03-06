import Home from "../components/Home/Home.js";
import React, { useEffect } from "react";
import Head from "next/head";

function App() {
  return (
    <>
      <Head>
        <title>Bangin Bananas</title>
        <link rel="icon" href="/imgs/bananalogo.png" />
        <link rel="apple-touch-icon" href="/imgs/bananalogo.png" />
      </Head>
      <Home />
    </>
  );
}

export default App;
