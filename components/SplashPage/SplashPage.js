import React, { useEffect, useState } from "react";
import {
  TitleText,
  ParagraphText,
  ImageDiv,
  SplashPageMain,
  TextDiv,
  SocialIcons,
  TwitterIcon,
  DiscordIcon,
  IconDiv,
  BananaImg,
  AuthorText,
} from "./SplashPageElements.js";
import Typed from "react-typed";
import Boop from "../../components/Navbar/logo.js";
import Tooltip from "@mui/material/Tooltip";
//import Freezeframe from "freezeframe";

const SplashPage = (props) => {
  // useEffect(() => {
  //   const ff = new Freezeframe({
  //     trigger: "hover",
  //   });
  // }, []);

  return (
    <>
      <SplashPageMain>
        <ImageDiv>
          <BananaImg
            // className="freezeframe"
            // src="/gifs/banana_transparent_new.gif"
            //src="/gifs/Banana-White-stroke-HD.gif"
            src="/gifs/banana-f5deff-HD.gif"
          />
        </ImageDiv>
        <TextDiv>
          <TitleText>
            Something special is in the works, stay tuned :)
          </TitleText>
          <ParagraphText>
            <Typed
              strings={[
                "Bangin Bananas is a collection of 6,969 randomly generated hand drawn profile pics.",
              ]}
              typeSpeed={5}
              backSpeed={10}
              backDelay={20000}
              loop
            />
          </ParagraphText>
          <SocialIcons>
            <IconDiv>
              <Boop rotation={20} timing={200} tension={100} friction={20}>
                <a href="https://twitter.com/bangin_bananas">
                  <TwitterIcon
                    src="/imgs/socialIcons/twitter-brands.svg"
                    height="50px"
                  />
                </a>
              </Boop>
            </IconDiv>
            <IconDiv>
              <Boop rotation={20} timing={200} tension={100} friction={20}>
                <Tooltip title="Coming soon">
                  <DiscordIcon
                    src="/imgs/socialIcons/discord-brands.svg"
                    height="50px"
                  />
                </Tooltip>
              </Boop>
            </IconDiv>
            <AuthorText className="authorText">By Mark & Marisa</AuthorText>
          </SocialIcons>
        </TextDiv>
      </SplashPageMain>
    </>
  );
};

export default SplashPage;
