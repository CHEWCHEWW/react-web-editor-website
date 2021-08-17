import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";

import { DRAG_AND_DROP_BLOCK } from "../../constants/codeExample";
import BounceArrowMessage from "../BounceArrowMessage";
import DragAndDropCard from "../DragAndDropCard";
import DragAndDropSentence from "../DragAndDropSentence";

const CodeEditor = dynamic(
  () => import("../CodeEditor"),
  { ssr: false }
);

const DragAndDropSection: React.FC = (): React.ReactElement => {
  return (
    <Section>
      <Background />
      <DragAndDropSentence />
      <DragAndDropCard />
      <BounceArrowMessage
        icon={faArrowUp}
        message={"Change Order"}
        animation={"bounce-up"}
      />
      <CodeEditorWrapper>
        <CodeEditor code={DRAG_AND_DROP_BLOCK} />
      </CodeEditorWrapper>
    </Section>
  );
};

const Background = styled.span`
  width: 65rem;
  height: 70rem;
  z-index: -1;
  background-color: ${({ theme }) => theme.White};
  position: absolute;

  ::before {
    position: absolute;
    content: "";
    top: 15px;
    bottom: 0;
    left: 20px;
    right: 20px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
  }

  ::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFF;
  }
`;

const Section = styled.section`
  display: flex;
  width: 80rem;
  height: 65rem;
  margin: 9rem 0 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CodeEditorWrapper = styled.div`
  width: 55%;
  margin : 3.5rem 0 3rem 0;
`;

export default DragAndDropSection;
