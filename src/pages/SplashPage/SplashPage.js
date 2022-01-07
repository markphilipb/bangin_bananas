import React from "react";
import {
  TitleText,
  ParagraphText,
  ImageDiv,
  SplashPageMain,
  TextDiv,
  SocialIcons,
  Icon,
  IconDiv,
  BananaImg,
} from "./SplashPageElements.js";
import bananaImg from "../../imgs/TempBanana.png";
import Typed from "react-typed";
import twitterIcon from "../../imgs/socialIcons/twitter-brands.svg";
import discordIcon from "../../imgs/socialIcons/discord-brands.svg";
import Boop from "../../components/Navbar/logo.js";

const SplashPage = () => {
  return (
    <>
      <SplashPageMain>
        <ImageDiv>
          <BananaImg src={bananaImg} />
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
              <Boop rotation={20} timing={200} tension={100} friction={50}>
                <a href="https://twitter.com/bangin_bananas">
                  <Icon src={twitterIcon} height="50px" />
                </a>
              </Boop>
            </IconDiv>
            <IconDiv>
              <Boop rotation={20} timing={200} tension={100} friction={50}>
                <Icon src={discordIcon} height="50px" />
              </Boop>
            </IconDiv>
          </SocialIcons>
        </TextDiv>
      </SplashPageMain>
    </>
  );
};

export default SplashPage;
