import React from "react";
import styled from "styled-components";

import easyToUse from "../../../public/easyToUse.png";
import react from "../../../public/react.png";
import simpleUse from "../../../public/simpleUse.png";
import MiniCard from "../MiniCard";

const SurmmerizeCardSection: React.FC = (): React.ReactElement => {
  return (
    <CardSection>
      <MiniCard
        title={"Easy To Use"}
        description={"By Importing Single Block, you can handle all features just using mouse."}
        src={easyToUse}
        alt="easy to use"
      />
      <MiniCard
        title={"Hooks Friendly"}
        description={"You can use custom hook for single feature."}
        src={react}
        alt="react"
      />
      <MiniCard
        title={"Expandablity"}
        description={"It's light and simple. you can generate your own application easy"}
        src={simpleUse} alt="simple use"
      />
    </CardSection>
  );
};

const CardSection = styled.section`
  display: flex;
  width: 55rem;
  min-width: 30rem;
  min-height: 20rem;
  margin: 5rem 0 0 0;
  align-items: center;
  background-color: #FEEDEB;
  justify-content: space-evenly;
`;

export default SurmmerizeCardSection;
