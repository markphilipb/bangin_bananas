import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Header/Header.js";
import About from "../About/About.js";
import Why from "../Why/Why.js";
import Schedule from "../Schedule/Schedule.js";
import Team from "../Team/Team.js";
import FAQ from "../FAQ/FAQ.js";
import {
  connectWallet,
  getCurrentWalletConnected,
  handleMint,
} from "../../util/interact.js";
import Navbar from "../Navbar/Navbar.js";

const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: center; */}
  ${"" /* align-items: center; */}
  text-align: center;
  ${"" /* vertical-align: middle; */}
  width: 100%;
  height: calc(100vh - 100px);
  padding: 0.5rem calc((50vw - 1000px) / 2);
  padding-top: 5rem;
  box-sizing: border-box;
`;

const Home = () => {
  const [walletAddress, setWallet] = useState("");

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
        }
      });
    } else {
      console.log("install metamask");
    }
  }

  useEffect(() => {
    async function fetchWallet() {
      const { address } = await getCurrentWalletConnected();
      setWallet(address);
    }
    fetchWallet();
    addWalletListener();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
  };

  const mintClicked = async () => {
    await handleMint();
  };

  return (
    <>
      <Navbar
        onConnectClick={connectWalletPressed}
        walletAddr={walletAddress}
        onMintClick={mintClicked}
      />
      <HomeMain>
        <Header />
        <About />
        <Why />
        <Schedule />
        <Team />
        <FAQ />
      </HomeMain>
    </>
  );
};

export default Home;
