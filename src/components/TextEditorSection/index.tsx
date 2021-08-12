import dynamic from "next/dynamic";
import React from "react";
import { TextEditorBlock } from "react-web-editor";
import styled from "styled-components";

import { TEXT_EDITOR_BLOCK } from "../../constants/codeExample";
import { DEFAULT_LEFT, DEFAULT_TOP } from "../../constants/ui";
import EditorCard from "../EditorCard";

const CodeEditor = dynamic(
  () => import("../../components/CodeEditor"),
  { ssr: false }
);

const TextEditorSection: React.FC = (): React.ReactElement => {
  return (
    <EditorSection>
      <CodeEditor code={TEXT_EDITOR_BLOCK} />
      <EditorCard width={40} height={30} backgroundColor={"white"} unit={"rem"}>
        <TextEditorBlock
          width={20}
          height={20}
          top={0}
          left={0}
          unit={"rem"}
          parentStyle={{ width: 40, height: 40, top: DEFAULT_TOP, left: DEFAULT_LEFT }}
        />
      </EditorCard>
    </EditorSection>
  );
};

const EditorSection = styled.section`
  display: flex;
  width: 20rem;
  height: 15rem;
  background-color: orange;

`;

export default TextEditorSection;
