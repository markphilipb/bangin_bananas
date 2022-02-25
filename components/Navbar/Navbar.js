import React, { useState } from "react";
import * as S from "./NavbarElements.js";
import Boop from "./logo.js";
import Tooltip from "@mui/material/Tooltip";

const Navbar = (props) => {
  return (
    <>
      <S.Nav>
        <Boop rotation={20} timing={200} tension={150} friction={10}>
          <S.BananaLogo src="/imgs/bananalogo.png" />
        </Boop>
        <S.NavItems>
          <S.SocialIcons>
            <Boop rotation={20} timing={200} tension={100} friction={20}>
              <a href="https://twitter.com/bangin_bananas">
                <S.TwitterIcon
                  src="/imgs/socialIcons/twitter-brands.svg"
                  height="35px"
                />
              </a>
            </Boop>
            <Boop rotation={20} timing={200} tension={100} friction={20}>
              <Tooltip title="Coming soon">
                <S.DiscordIcon
                  src="/imgs/socialIcons/discord-brands.svg"
                  height="35px"
                />
              </Tooltip>
            </Boop>
            <Boop rotation={20} timing={200} tension={100} friction={20}>
              <S.OpenseaIcon
                src="/imgs/socialIcons/opensea-logo.svg"
                height="35px"
              />
            </Boop>
          </S.SocialIcons>
          <S.ConnectButton onClick={() => props.onConnectClick()}>
            {props.walletAddr.length > 0 ? (
              "Connected: " +
              String(props.walletAddr).substring(0, 6) +
              "..." +
              String(props.walletAddr).substring(38)
            ) : (
              <span>Connect</span>
            )}
          </S.ConnectButton>
          <button onClick={() => props.onMintClick()}>mint</button>
        </S.NavItems>
      </S.Nav>
    </>
  );
};

export default Navbar;
