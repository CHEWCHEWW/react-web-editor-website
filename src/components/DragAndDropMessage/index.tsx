import React from "react";

import Description from "../shared/Description";
import MainPhrase from "../shared/MainPhrase";
import MessageBoard from "../shared/MessageBoard";

const DragAndDropMessage: React.FC = (): React.ReactElement => {
  return (
    <MessageBoard>
      <MainPhrase>Simple Drag And Drop</MainPhrase>
      <Description>If you want to use Drag and Drop feature,</Description>
      <Description>The only you have to do is to put your code to Drag and drop component`s children.</Description>
    </MessageBoard>
  );
};

export default DragAndDropMessage;
