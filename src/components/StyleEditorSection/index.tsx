import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <Title>You can drag and resize your own component!</Title>
      <Description>you can handle WYSIWYG feature easily only using mouse event</Description>
      <EditorSectionContent>
        <TestCard>
          <Message>
            Try It
            <FontAwesomeIcon icon={faArrowDown} />
          </Message>
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
        </TestCard>
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
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: 600;
  margin-top: 0;
`;

const Description = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 0;
`;

const Message = styled.div`
  height: 2.2rem;
  font-size: 30px;
  margin-bottom: 1rem;
  z-index: 1;
`;

const EditorCardWrapper = styled.div`
  display: flex;
  margin-left: 0.4rem;
  border-radius: 20px;
`;

const CodeEditorWrapper = styled.div`
  width: 55%;
  height: 20rem;
  margin-left: 0.6rem;
  z-index: -1;
`;

const Circle = styled.div<CircleProps>`
  width: 100%;
  height: 100%;
  border-radius: 70px;
  background-color: ${({ color }) => color};
`;

const TestCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export default StyleEditorSection;
