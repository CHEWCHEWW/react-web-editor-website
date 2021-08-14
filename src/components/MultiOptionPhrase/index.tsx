import React from "react";
import styled from "styled-components";

import Description from "../shared/Description";
import MainPhrase from "../shared/MainPhrase";
import MessageBoard from "../shared/MessageBoard";

const MultiOptionPhrase: React.FC = (): React.ReactElement => {
  return (
    <MessageBoard>
      <MainPhrase>
        Find Your Style!
      </MainPhrase>
      <Description>
        Customize font using Text Editor Component.
      </Description>
      <Description>
        These examples are made by using default options.
        You can combine these options with your style.
      </Description>
    </MessageBoard>
  );
};

export default MultiOptionPhrase;
