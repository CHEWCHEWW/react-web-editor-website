import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";

import { HOOK_USAGE_EXAMPLE } from "../../constants/codeExample";
import Description from "../shared/Description";
import MainPhrase from "../shared/MainPhrase";

const CodeEditor = dynamic(
  () => import("../../components/CodeEditor"),
  { ssr: false }
);

const HookSection: React.FC = (): React.ReactElement => {
  return (
    <CodeSection>
      <MessageWrapper>
        <MainPhrase>Customize your component using hook</MainPhrase>
        <Description>You can import single feature hook.</Description>
        <Description>It provides simple process to generate your own component.</Description>
        <Description>You can generate web builder application using these hooks</Description>
      </MessageWrapper>
      <CodeEditorWrapper>
        <CodeEditor code={HOOK_USAGE_EXAMPLE} />
      </CodeEditorWrapper>
    </CodeSection>
  );
};

const CodeSection = styled.section`
  display: flex;
  width: 64rem;
  height: 30rem;
  margin: 14rem 0 0 0;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 3rem 0 0;
`;

const CodeEditorWrapper = styled.div`
  width: 90%;
  margin: 0 0 0 2rem;
`;

export default HookSection;
