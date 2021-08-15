import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";

import { STYLE_EDITOR_BLOCK } from "../../constants/codeExample";
import {
  DEFAULT_UNIT,
  STYLE_EDITOR_BLOCK_STYLES,
  STYLE_EDITOR_BOARD_SIZE,
  STYLE_SECTION_BACKGROUND_COLOR,
} from "../../constants/ui";
import EditorSectionPhrase from "../EditorSectionPhrase";
import StyleEditorCard from "../StyleEditorCard";

const CodeEditor = dynamic(
  () => import("../../components/CodeEditor"),
  { ssr: false }
);

const StyleEditorSection: React.FC = (): React.ReactElement => {
  return (
    <EditorSection>
      <EditorSectionPhrase />
      <Content>
        <StyleEditorCard
          editorBoardSize={STYLE_EDITOR_BOARD_SIZE}
          unit={DEFAULT_UNIT}
          editorStyles={STYLE_EDITOR_BLOCK_STYLES}
          backgroundColor={STYLE_SECTION_BACKGROUND_COLOR}
        />
        <CodeEditorWrapper>
          <CodeEditor code={STYLE_EDITOR_BLOCK} />
        </CodeEditorWrapper>
      </Content>
    </EditorSection>
  );
};

const EditorSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  height: 60rem;
  margin: 7rem 0 0 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  margin: 6rem 0 0 0;
`;

const CodeEditorWrapper = styled.div`
  width: 55%;
  height: 20rem;
  margin: -2rem 0 0 2.4rem;
  z-index: -1;
`;

export default StyleEditorSection;
