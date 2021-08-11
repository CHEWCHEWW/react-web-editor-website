import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFeatherAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

import MiniCard from "../MiniCard";

const MiniCardBoard: React.FC = ({ children }): React.ReactElement => {
  return (
    <CardBoardWRow>
      <MiniCard 
        title={"Easy To Use"} 
        description={"By Importing Single Block, you can handle all features just using mouse."}
      >
        <FontAwesomeIcon icon={faUserEdit} />
      </MiniCard>
      <MiniCard 
        title={"React Hooks Friendly"} 
        description={"You can use custom hook for single feature."}
      >
        <FontAwesomeIcon icon={faReact} />
      </MiniCard>
      <MiniCard 
        title={"Simple And Light"} 
        description={"Bye All handlers. You need just simple props to achieve your goals."}
      >
        <FontAwesomeIcon icon={faFeatherAlt} />
      </MiniCard>
      {children}
    </CardBoardWRow>
  );
};

const CardBoardWRow = styled.div`
  display: flex;
  width: 60%;
  height: 15rem;
  margin: 1rem auto;
  align-items: center;
  justify-content: space-evenly;
`;

export default MiniCardBoard;
