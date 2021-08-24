import React from "react";
import styled from "styled-components";

import MainButton from "../MainButton";

const MainTitleSection: React.FC = (): React.ReactElement => {
  return (
    <MainSection>
      <Title>REACT WEB EDITOR</Title>
      <SubTitle>A Simple WYSIWYG editor for react user.</SubTitle>
      <SubSentenceContent>
        <SubSentence>You can generate an website using React Web Editor. It is light and intuitive.</SubSentence>
        <SubSentence>Feel free to try it on this website. Click images!</SubSentence>
      </SubSentenceContent>
      <ButtonsArea>
        <ButtonLink
          target="_blank"
          href="https://www.npmjs.com/package/react-web-editor"
          rel="noreferrer"
        >
          <MainButton>
            Try this!
          </MainButton>
        </ButtonLink>
      </ButtonsArea>
    </MainSection>
  );
};

const ButtonLink = styled.a`
  text-decoration: none;
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  height: 25rem;
  margin: 8rem 0 0 0;
`;

const ButtonsArea = styled.div`
  display: flex;
  margin: 1.5rem;
`;

const SubSentenceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  margin: 3rem 0 0 0;
`;

const SubSentence = styled.h3`
  margin: 0.2rem 0;
  font-weight: 600;
  font-size: 20px;
`;

const SubTitle = styled.h2`
  margin: 2rem 0 0 0;
  font-weight: 400;
  font-size: 2rem;
  color: #9d9da0;
`;

const Title = styled.h1`
  margin: 2rem 0 0 0;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.3rem;
`;

export default MainTitleSection;
