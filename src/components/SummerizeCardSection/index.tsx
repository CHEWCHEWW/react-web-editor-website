// import { faReact } from "@fortawesome/free-brands-svg-icons";
// import { faFeatherAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

import easyToUse from "../../../public/easyToUse.png";
import react from "../../../public/react.png";
import simpleUse from "../../../public/simpleUse.png";
import MiniCard from "../MiniCard";

const SurmmerizeCardSection: React.FC = ({ children }): React.ReactElement => {
  return (
    <CardSection>
      <MiniCard
        title={"Easy To Use"}
        description={"By Importing Single Block, you can handle all features just using mouse."}
      >
        <Image src={easyToUse} alt="easy to use" />
        {/* <FontAwesomeIcon icon={faUserEdit} /> */}
      </MiniCard>
      <MiniCard
        title={"Hooks Friendly"}
        description={"You can use custom hook for single feature."}
      >
        <Image src={react} alt="react" />
        {/* <FontAwesomeIcon icon={faReact} /> */}
      </MiniCard>
      <MiniCard
        title={"Simple And Light"}
        description={"Bye Bye All handlers. You need just simple props to achieve your goals."}
      >
        <Image src={simpleUse} alt="simple use" />
        {/* <FontAwesomeIcon icon={faFeatherAlt} /> */}
      </MiniCard>
      {children}
    </CardSection>
  );
};

const CardSection = styled.section`
  display: flex;
  width: 55rem;
  min-width: 30rem;
  min-height: 20rem;
  align-items: center;
  background-color: #FEEDEB;
  justify-content: space-evenly;
`;

export default SurmmerizeCardSection;
