import React from "react";

import MainSentence from "../shared/MainSentence";
import SentenceArea from "../shared/SentenceArea";
import SubSentence from "../shared/SubSentence";
import SubSentenceArea from "../shared/SubSentenceArea";

const VarietyTextSentence: React.FC = (): React.ReactElement => {
  return (
    <SentenceArea>
      <MainSentence>
        Find Your Style!
      </MainSentence>
      <SubSentenceArea>
        <SubSentence>
          Customize font using Text Editor Component.
        </SubSentence>
        <SubSentence>
          These examples are made by default options we provide.
        </SubSentence>
        <SubSentence>
          You can create your own style with these options.
        </SubSentence>
      </SubSentenceArea>
    </SentenceArea>
  );
};

export default VarietyTextSentence;
