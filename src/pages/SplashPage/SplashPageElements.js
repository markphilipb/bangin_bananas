import styled from "styled-components";

export const SplashPageMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: auto;
  padding: 0.5rem calc((50vw - 1000px) / 2);

  ${"" /* portrait mode tablets */}
  @media only screen and (max-width: 1023px) {
    flex-direction: column-reverse;
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

export const Icon = styled.img`
  color: #000;
`;
export const IconDiv = styled.div`
  margin: 1em;
`;
