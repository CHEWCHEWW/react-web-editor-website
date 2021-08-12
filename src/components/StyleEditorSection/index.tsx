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
      <Message>
        Try It
        <FontAwesomeIcon className="arrow" icon={faArrowDown} />
      </Message>
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
  margin-top: 2rem;
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
  display: flex;
  width: 45%;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 1rem 2rem;
  height: 2.2rem;
  font-size: 45px;
  font-weight: 600;
  z-index: 1;

  .arrow {
    font-size: 35px;
    margin-left: 0.5rem;
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
  }
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
