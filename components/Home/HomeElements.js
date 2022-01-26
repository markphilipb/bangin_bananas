import styled from "styled-components";

export const Main = styled.div`
  background-color: #f5deff;
  display: flex;
  justify-content: center;
  ${"" /* flex-wrap: wrap-reverse; */}
  font-family: "Regular";
  color: #000;
  flex-direction: column;
  padding: 0.5em;
  padding-top: 0.5em;
  height: 100vh;

  @media only screen and (max-width: 520px) {
    width: 110vw;
  }

  ${"" /* portrait mode tablets */}
  @media only screen and (max-width: 1023px) {
    height: auto;
  }
`;
