import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import DragAndDropSection from "../../components/DragAndDropSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HookSection from "../../components/HookSection";
import MainTitleSection from "../../components/MainTitleSection";
import StyleEditorSection from "../../components/StyleEditorSection";
import SummerizeCardSection from "../../components/SummerizeCardSection";
import TextEditorSection from "../../components/TextEditorSection";
import VarietyTextSection from "../../components/VarietyTextSection";
import VideoSection from "../../components/VideoSection";

const Page: React.FC = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>react-web-editor</title>
        <meta name="SubSentence" content="react-web-editor is a simple WYSIWYG editor. You can edit component easy just using mouse click" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <Header>
          <Link href="/documents" passHref>
            <MenuName>
              Docs
            </MenuName>
          </Link>
          <MenuName
            target="_blank"
            href="https://github.com/CHEWCHEWW/react-web-editor/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </MenuName>
        </Header>
        <MainTitleSection />
        <SummerizeCardSection />
        <StyleEditorSection />
        <TextEditorSection />
        <DragAndDropSection />
        <HookSection />
        <VarietyTextSection />
        <VideoSection />
        <Footer>
          <p>chewchewchew3@gmail.com</p>
        </Footer>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  font-family: "Poppins", serif;
  color: ${({ theme }) => theme.MainTextColor};
`;

const MenuName = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.HeaderTextColor};
  text-decoration: none;
`;

export default Page;
