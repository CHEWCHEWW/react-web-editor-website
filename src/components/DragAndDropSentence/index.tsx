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
        <SubSentence>Need a Drag and Drop function on your component?</SubSentence>
        <SubSentence>Just wrap the components. Then you are good to go.</SubSentence>
      </SubSentenceArea>
    </SentenceArea>
  );
};

export default DragAndDropSentence;
