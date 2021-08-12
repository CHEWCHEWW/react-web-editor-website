import dynamic from "next/dynamic";
import React from "react";
import { StyleEditorBlock } from "react-web-editor";
import styled from "styled-components";

import { STYLE_EDITOR_BLOCK } from "../../constants/codeExample";
import { DEFAULT_LEFT, DEFAULT_TOP } from "../../constants/ui";
import EditorCard from "../EditorCard";

interface CircleProps {
  color: string
}

const CodeEditor = dynamic(
  () => import("../../components/CodeEditor"),
  { ssr: false }
);

const StyleEditorSection: React.FC = (): React.ReactElement => {
  return (
    <EditorSection>
      <EditorSectionContent>
        <EditorCardWrapper>
          <EditorCard unit={"rem"} width={30} height={22} backgroundColor={"#f8f3ee"}>
            <StyleEditorBlock
              width={9}
              height={9}
              left={2}
              top={1}
              parentStyle={{ width: 30, height: 22, top: DEFAULT_TOP, left: DEFAULT_LEFT }}
              unit={"rem"}
              initialColor={"#00ff0000"}
            >
              <Circle color={"#F2BFB5"} />
            </StyleEditorBlock>
            <StyleEditorBlock
              width={7}
              height={7}
              left={8}
              top={2}
              parentStyle={{ width: 30, height: 22, top: DEFAULT_TOP, left: DEFAULT_LEFT }}
              unit={"rem"}
              initialColor={"#00ff0000"}
            >
              <Circle color={"#f0df93"} />
            </StyleEditorBlock>
            <StyleEditorBlock
              width={9}
              height={9}
              left={18}
              top={10}
              parentStyle={{ width: 30, height: 22, top: DEFAULT_TOP, left: DEFAULT_LEFT }}
              unit={"rem"}
              initialColor={"#00ff0000"}
            >
              <Circle color={"#7bc0d1"} />
            </StyleEditorBlock>
            <StyleEditorBlock
              width={5}
              height={5}
              left={15}
              top={16}
              parentStyle={{ width: 30, height: 22, top: DEFAULT_TOP, left: DEFAULT_LEFT }}
              unit={"rem"}
              initialColor={"#00ff0000"}
            >
              <Circle color={"#b488dd"} />
            </StyleEditorBlock>
          </EditorCard>
        </EditorCardWrapper>
        <CodeEditorWrapper>
          <CodeEditor code={STYLE_EDITOR_BLOCK} />
        </CodeEditorWrapper>
      </EditorSectionContent>
    </EditorSection>
  );
};

const EditorSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 65rem;
  height: 35rem;
  margin-top: 3rem;
`;

const EditorSectionContent = styled.div`
  display: flex;
  height: 95%;
  margin-top: 1.5rem;
`;

const EditorCardWrapper = styled.div`
  display: flex;
  width: 45%;
  margin-left: 0.4rem;
  border-radius: 20px;
`;

const CodeEditorWrapper = styled.div`
  width: 55%;
  height: 20rem;
  margin: -2rem 0 0 0.6rem;
  z-index: -1;
`;

const Circle = styled.div<CircleProps>`
  width: 100%;
  height: 100%;
  border-radius: 70px;
  background-color: ${({ color }) => color};
`;

export default StyleEditorSection;
