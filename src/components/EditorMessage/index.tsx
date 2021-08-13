import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import BounceMessage from "../shared/BounceMessage";
import Description from "../shared/Description";
import MainPhrase from "../shared/MainPhrase";
import MessageBoard from "../shared/MessageBoard";

const EditorMessage: React.FC = (): React.ReactElement => {
  return (
    <MessageBoard>
      <MainPhrase>
        You can handle WYSIWYG feature easily
      </MainPhrase>
      <Description>
        You can drag and resize all components.
      </Description>
      <Description>
        Style Editor Block is a component which handle not only color, but also image.
      </Description>
      <Description>
        Text Editor Block is a simple rich text editor.
      </Description>
      <Description>
        If you want to use this feature, Put your cursor to component.
      </Description>
      <BounceMessage animation="bounceDown">
        Try It Now!
        <FontAwesomeIcon className="arrow" icon={faArrowDown} />
      </BounceMessage>
    </MessageBoard>
  );
};

export default EditorMessage;
