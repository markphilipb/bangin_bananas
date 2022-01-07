import styled from "styled-components";

export const SplashPageMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${"" /* portrait mode tablets */}
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column-reverse;
  }
  ${"" /* portrait smart phones */}
  @media only screen and (min-width: 321px) and (max-width: 420px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 320px) {
    flex-direction: column-reverse;
  }
`;
export const TitleText = styled.p`
  font-size: 100px;
  height: auto;
  letter-spacing: -0.05em;
  margin: 0px;
`;
export const ParagraphText = styled.p`
  font-size: 40px;
  height: 4em;
  letter-spacing: -0.05em;
`;
export const ImageDiv = styled.div``;
export const BananaImg = styled.img`
  @media only screen and (min-width: 1950px) {
    width: 1000px;
    height: auto;
  }
  @media only screen and (min-width: 1920px) and (max-width: 1950px) {
    width: 800px;
    height: auto;
  }
  @media only screen and (min-width: 1700px) and (max-width: 1919px) {
    width: 800px;
    height: auto;
  }
`;
export const TextDiv = styled.div`
  font-family: "Regular";
  color: #000;
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  justify-content: flex-start;
  align-items: left;
`;

export const Icon = styled.img`
  color: #000;
`;
export const IconDiv = styled.div`
  margin-right: 5em;
`;
