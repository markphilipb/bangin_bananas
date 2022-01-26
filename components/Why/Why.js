import React from "react";
import styled from "styled-components";

const WhyTitle = styled.h2`
  font-size: 150px;
  font-weight: normal;
  height: auto;
  letter-spacing: -0.05em;
  margin: 0px;
`;

const TextSection = styled.div``;

const WhyMain = styled.div`
  display: flex;
  justify-content: center;
`;

const WhyParagraph = styled.p`
  font-size: 75px;
  height: auto;
  letter-spacing: -0.05em;
  margin: 0px;
`;

function Why() {
  return (
    <WhyMain>
      <TextSection>
        <WhyTitle>WHY Banana?</WhyTitle>
        <WhyParagraph>Because..</WhyParagraph>
      </TextSection>
    </WhyMain>
  );
}

export default Why;
