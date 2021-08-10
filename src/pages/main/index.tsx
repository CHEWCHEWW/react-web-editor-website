import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import { STYLE_EDITOR_BLOCK } from "../../constants/codeExample";

const CodeEditor = dynamic(
  () => import("../../components/CodeEditor"),
  { ssr: false }
);

const Page: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header menus={["Documentation"]} />
      <CodeEditor code={STYLE_EDITOR_BLOCK} />
    </>
  );
};

export default Page;
