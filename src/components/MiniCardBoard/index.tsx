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

const MiniCardBoard: React.FC = ({ children }): React.ReactElement => {
  return (
    <CardBoardWRow>
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
        description={"Bye All handlers. You need just simple props to achieve your goals."}
      >
        <Image src={simpleUse} alt="simple use" />
        {/* <FontAwesomeIcon icon={faFeatherAlt} /> */}
      </MiniCard>
      {children}
    </CardBoardWRow>
  );
};

const CardBoardWRow = styled.div`
  display: flex;
  width: 50rem;
  height: 17rem;
  margin: 1rem auto;
  align-items: center;
  justify-content: space-evenly;
`;

export default MiniCardBoard;
