import React from "react";
import styled from "styled-components";

import MainButton from "../MainButton";

const MainTitleSection: React.FC = (): React.ReactElement => {
  return (
    <MainSection>
      <Title>REACT WEB EDITOR</Title>
      <SubTitle>A Simple WYSIWYG editor for react user.</SubTitle>
      <SubSentenceContent>
        <SubSentence>You can create your style using default features. It is light and intuitive.</SubSentence>
        <SubSentence>You can test it directly on this site. Click on the pictures.</SubSentence>
      </SubSentenceContent>
      <ButtonsArea>
        <MainButton>
          Try with install
        </MainButton>
      </ButtonsArea>
    </MainSection>
  );
};

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

const SubTitle = styled.h3`
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
