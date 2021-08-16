import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

import BounceArrowMessage from "../BounceArrowMessage";
import MainSentence from "../shared/MainSentence";
import SubSentence from "../shared/SubSentence";
import SubSentenceArea from "../shared/SubSentenceArea";

const EditorSectionSentence: React.FC = (): React.ReactElement => {
  return (
    <SentenceArea>
      <MainSentence>
        You can handle WYSIWYG feature easily
      </MainSentence>
      <SubSentenceArea>
        <SubSentence>
          You can drag and resize all components.
        </SubSentence>
        <SubSentence>
          Style Editor Block is a component which handle not only color, but also image.
        </SubSentence>
        <SubSentence>
          Text Editor Block is a simple rich text editor.
        </SubSentence>
        <SubSentence>
          If you want to use this feature, Put your cursor to component.
        </SubSentence>
      </SubSentenceArea>
      <BounceArrowMessage
        animation={"bounceDown"}
        message={"Try It Now"}
        icon={faArrowDown}
      />
    </SentenceArea>
  );
};

const SentenceArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45%;
  margin: 3rem 0 0 0;
`;

export default EditorSectionSentence;
