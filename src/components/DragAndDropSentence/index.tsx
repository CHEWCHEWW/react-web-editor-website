import React from "react";

import MainSentence from "../shared/MainSentence";
import SentenceArea from "../shared/SentenceArea";
import SubSentence from "../shared/SubSentence";
import SubSentenceArea from "../shared/SubSentenceArea";

const DragAndDropSentence: React.FC = (): React.ReactElement => {
  return (
    <SentenceArea>
      <MainSentence>Simple Drag And Drop</MainSentence>
      <SubSentenceArea>
        <SubSentence>If you want to use Drag and Drop feature,</SubSentence>
        <SubSentence>The only you have to do is to put your code to Drag and drop component`s children.</SubSentence>
      </SubSentenceArea>
    </SentenceArea>
  );
};

export default DragAndDropSentence;
