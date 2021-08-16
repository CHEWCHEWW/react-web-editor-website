import React from "react";
import styled from "styled-components";

import MainVideoPlayer from "../MainVideoPlayer";
import Description from "../shared/Description";

const MainTitleSection: React.FC = (): React.ReactElement => {
  return (
    <MainSection>
      <Title>REACT WEB EDITOR</Title>
      <Description>A Simple WYSIWYG editor for react user.</Description>
      <Description>You can create your style using default features.</Description>
      <Description>It is light and intuitive. Try It.</Description>
      <MainVideoPlayer src={"/speedUp.mp4"} type={"video/mp4"}/>
    </MainSection>
  );
};

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  height: 50rem;
  margin: 5rem 0  0;
`;

const Title = styled.h1`
  margin: 2rem 0 3rem 0;
  font-size: 3rem;
  letter-spacing: 0.3rem;
`;

export default MainTitleSection;
