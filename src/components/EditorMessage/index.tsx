import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

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
      <BounceMessage>
        Try It Now!
        <FontAwesomeIcon className="arrow" icon={faArrowDown} />
      </BounceMessage>
    </MessageBoard>
  );
};

const BounceMessage = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 1rem 0;
  height: 2.2rem;
  font-size: 35px;
  font-weight: 600;
  z-index: 1;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(-20px);
    }

    60% {
      transform: translateY(-10px);
    }
  }

  .arrow {
    margin-left: 0.5rem;
  }
`;

export default EditorMessage;
