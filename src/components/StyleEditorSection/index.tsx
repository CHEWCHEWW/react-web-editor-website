import dynamic from "next/dynamic";
import React from "react";
import { StyleEditorBlock } from "react-web-editor";
import styled from "styled-components";

import { STYLE_EDITOR_BLOCK } from "../../constants/codeExample";
import { DEFAULT_LEFT, DEFAULT_TOP } from "../../constants/ui";
import EditorCard from "../EditorCard";

const CodeEditor = dynamic(
  () => import("../../components/CodeEditor"),
  { ssr: false }
);

const StyleEditorSection: React.FC = (): React.ReactElement => {
  return (
    <EditorSection>
      <EditorCardWrapper>
        <EditorCard unit={"rem"} width={30} height={20} backgroundColor={"#8a1515"}>
          <StyleEditorBlock
            width={10} 
            height={10} 
            left={3} 
            top={3} 
            parentStyle={{ width: 20, height: 30, top: DEFAULT_TOP, left: DEFAULT_LEFT }} 
            unit={"rem"}
            initialColor={"#00ff0000"}
          >

          </StyleEditorBlock>
        </EditorCard>
      </EditorCardWrapper>
      <CodeEditorWrapper>
        <CodeEditor code={STYLE_EDITOR_BLOCK} />
      </CodeEditorWrapper>
    </EditorSection>
  );
};

const EditorSection = styled.section`
  display: flex;
  width: 65rem;
  height: 30rem;
  margin-top: 2rem;
`;

const EditorCardWrapper = styled.div`
  display: flex;
  width: 50%;
  right: 30%;
  position: absolute;
`;

const CodeEditorWrapper = styled.div`
  width: 30%;
  left: 50%;
  position: absolute;
`;

export default StyleEditorSection;
