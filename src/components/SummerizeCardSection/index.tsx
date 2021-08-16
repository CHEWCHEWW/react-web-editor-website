import React from "react";
import styled from "styled-components";

import easyToUse from "../../../public/easyToUse.png";
import react from "../../../public/react.png";
import simpleUse from "../../../public/simpleUse.png";
import MiniCard from "../MiniCard";

const SurmmerizeCardSection: React.FC = (): React.ReactElement => {
  return (
    <CardSection>
      <SubTitle>Why React Web Editor?</SubTitle>
      <CardRow>
        <MiniCard
          title={"Easy To Use"}
          subSentence={"By Importing Single Block, you can handle all features just using mouse."}
          src={easyToUse}
          alt="easy to use"
        />
        <MiniCard
          title={"Hooks Friendly"}
          subSentence={"You can use custom hook for single feature."}
          src={react}
          alt="react"
        />
        <MiniCard
          title={"Expandablity"}
          subSentence={"It's light and simple. you can generate your own application easy"}
          src={simpleUse} alt="simple use"
        />
      </CardRow>
    </CardSection>
  );
};

const CardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 30rem;
  min-height: 20rem;
  margin: 4rem 0 0 0;
  background-color: #FEEDEB;
`;

const CardSection = styled.section`
  display: flex;
  width: 55rem;
  height: 23rem;
  margin: 10rem 0 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 2.5rem;
  font-weight: 600;
`;

export default SurmmerizeCardSection;
