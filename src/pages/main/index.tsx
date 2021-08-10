import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Link from "next/link";
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
      <Header>
        <Link href="/demo" passHref>
          <MenuName>
            Demo
          </MenuName>
        </Link>
        <MenuName target="_blank" href="https://github.com/CHEWCHEWW/react-web-editor/" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </MenuName>
      </Header>
      <CodeEditor code={STYLE_EDITOR_BLOCK} />
    </>
  );
};

const MenuName = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #CDCDC9;
  text-decoration: none;
`;

export default Page;
