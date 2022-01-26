import React from "react";
import styled from "styled-components";

const AboutTitle = styled.h2`
  font-size: 150px;
  font-weight: normal;
  height: auto;
  letter-spacing: -0.05em;
  margin: 0px;
`;

const TextSection = styled.div``;

const AboutMain = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutParagraph = styled.p`
  font-size: 75px;
  height: auto;
  letter-spacing: -0.05em;
  margin: 0px;
`;

function About() {
  return (
    <AboutMain>
      <TextSection>
        <AboutTitle>Bangin Bananas WHO?</AboutTitle>
        <AboutParagraph>
          A collection of 6969 randomly generated handrawn NFTs on the Ethereum
          blockchain
        </AboutParagraph>
      </TextSection>
    </AboutMain>
  );
}

export default About;
