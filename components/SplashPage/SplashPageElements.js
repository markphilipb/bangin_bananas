import styled from "styled-components";

export const SplashPageMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: calc(100vh - 100px);
  padding: 0.5rem calc((50vw - 1000px) / 2);
  box-sizing: border-box;
  ${"" /* portrait mode tablets */}
  @media only screen and (max-width: 1023px) {
    flex-direction: column-reverse;
    height: 100%;
  }
`;

export const TitleText = styled.p`
  font-size: 100px;
  height: auto;
  letter-spacing: -0.05em;
  margin: 0px;

  @media only screen and (max-width: 600px) {
    font-size: 80px;
  }
`;

export const ParagraphText = styled.p`
  font-size: 50px;
  height: 3em;
  letter-spacing: -0.05em;
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    height: 2em;
    margin: 10px;
    font-size: 50px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 50px;
  }
`;

export const ImageDiv = styled.div``;
export const BananaImg = styled.img`
  @media only screen and (min-width: 1950px) {
    width: 1000px;
    height: auto;
  }
  @media only screen and (min-width: 1920px) and (max-width: 1950px) {
    width: 600px;
    height: auto;
  }
  @media only screen and (min-width: 1700px) and (max-width: 1919px) {
    width: 600px;
    height: auto;
  }
  @media only screen and (min-width: 1366px) and (max-width: 1699px) {
    width: 600px;
    height: auto;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    width: 400px;
    height: auto;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

export const TextDiv = styled.div`
  font-family: "Regular";
  color: #000;
  padding-right: 2rem;

  @media only screen and (max-width: 1023px) {
    flex-direction: column-reverse;
    padding: 1rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.5rem calc((50vw - 1000px) / 2);
`;

export const TwitterIcon = styled.img`
  fill: #fff;
  .icon:hover {
    fill: #01bf71;
    transition: 0.2 ease-in-out;
  }
`;

export const DiscordIcon = styled.img`
  color: #000;
`;

export const IconDiv = styled.div`
  margin: 2em;
`;

export const AuthorText = styled.p`
  font-size: 40px;
  letter-spacing: -0.05em;
`;
