import dynamic from "next/dynamic";
import React from "react";
import { TextEditorBlock } from "react-web-editor";
import styled from "styled-components";

import { TEXT_EDITOR_BLOCK } from "../../constants/codeExample";
import { TEXT_EDITOR_EXAMPLE_COMMENT, TEXT_EDITOR_EXAMPLE_MESSAGE } from "../../constants/text";
import EditorCard from "../EditorCard";

const CodeEditor = dynamic(
  () => import("../../components/CodeEditor"),
  { ssr: false }
);

const TextEditorSection: React.FC = (): React.ReactElement => {
  return (
    <EditorSection>
      <CodeEditorWrapper>
        <Message>
          If You Click second tab,
          <br/>
          Settings window appears on the screen.
        </Message>
        <CodeEditor code={TEXT_EDITOR_BLOCK} />
      </CodeEditorWrapper>
      <EditorCardWrapper>
        <EditorCard
          width={33}
          height={30}
          unit={"rem"}
          backgroundColor={"#f3f3ea"}
        >
          <TextEditorBlock
            width={25}
            height={3}
            top={3}
            left={3}
            unit={"rem"}
            parentStyle={{ width: 33, height: 30 }}
            initialText={"MY Phrase"}
            initialFontSize={0.51}
            initialFontColor={"#232665"}
            initialFontName={"style-script"}
            initialFontStyle={"twin-color-text"}
          />
          <TextEditorBlock
            width={25}
            height={15}
            top={9}
            left={3}
            unit={"rem"}
            parentStyle={{ width: 33, height: 30 }}
            initialText={TEXT_EDITOR_EXAMPLE_MESSAGE}
            initialFontSize={0.27}
            initialFontColor={"#232665"}
            initialFontName={"andada-pro"}
          />
          <TextEditorBlock
            width={15}
            height={4}
            top={24.5}
            left={12.5}
            unit={"rem"}
            parentStyle={{ width: 33, height: 30 }}
            initialText={TEXT_EDITOR_EXAMPLE_COMMENT}
            initialFontSize={0.22}
            initialFontColor={"#232665"}
            initialFontName={"andada-pro"}
          />
        </EditorCard>
      </EditorCardWrapper>
    </EditorSection>
  );
};

const EditorSection = styled.section`
  display: flex;
  width: 70rem;
  height: 30rem;
  margin: 2rem 0 0 0;
  color: #232665;
  font-weight: bold;
`;

const CodeEditorWrapper = styled.div`
  width: 47%;
  height: 23rem;
  border-radius: 0.5rem;
  margin: 0 0 0 2rem;
  overflow: hidden;
`;

const EditorCardWrapper = styled.div`
  display: flex;
  width: 45%;
  margin: 0 0 0 -1.5rem;
  border-radius: 0.5rem;
  z-index: 1;
`;

const Message = styled.div`
  display: flex;
  width: 90%;
  height: 20%;
  font-size: 22px;
  color: black;
  margin: 0 0 3rem 0;
  line-height: 2.4rem;

  ::before {
    content: "";
    border-left: 4px solid #E0DFDC;
    margin-right: 1rem;
  }
`;

export default TextEditorSection;
