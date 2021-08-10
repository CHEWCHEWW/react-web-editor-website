import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Head from "next/head";
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
      <Head>
        <title>react-web-editor</title>
        <meta name="description" content="react-web-editor is a simple WYSIWYG editor. You can edit component easy just using mouse click" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <Header>
          <Link href="/demo" passHref>
            <MenuName>
              DEMO
            </MenuName>
          </Link>
          <MenuName target="_blank" href="https://github.com/CHEWCHEWW/react-web-editor/" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </MenuName>
        </Header>
        <Title>REACT WEB EDITOR</Title>
        <Description>A Simple WYSIWYG editor for react user</Description>
        <CodeEditor code={STYLE_EDITOR_BLOCK} />
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: "Poppins", serif;
`;

const Title = styled.h1`
  margin: 3rem 0 0 0;
  font-size: 2.5rem;
  letter-spacing: 0.3rem;
`;

const Description = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
`;

const MenuName = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #CDCDC9;
  text-decoration: none;
`;

export default Page;
