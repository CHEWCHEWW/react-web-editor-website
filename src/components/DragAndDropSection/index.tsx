import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";

import { DRAG_AND_DROP_BLOCK } from "../../constants/codeExample";
import BounceArrowMessage from "../BounceArrowMessage";
import DragAndDropCard from "../DragAndDropCard";
import DragAndDropPhrase from "../DragAndDropPhrase";

const CodeEditor = dynamic(
  () => import("../CodeEditor"),
  { ssr: false }
);

const DragAndDropSection: React.FC = (): React.ReactElement => {
  return (
    <Section>
      <DragAndDropPhrase />
      <DragAndDropCard />
      <BounceArrowMessage
        icon={faArrowUp}
        message={"Change Order"}
        animation={"bounceUp"}
      />
      <CodeEditorWrapper>
        <CodeEditor code={DRAG_AND_DROP_BLOCK} />
      </CodeEditorWrapper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  width: 80rem;
  height: 53rem;
  margin: 14rem 0 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CodeEditorWrapper = styled.div`
  width: 55%;
  margin : 3.5rem 0 0 0;
`;

export default DragAndDropSection;
