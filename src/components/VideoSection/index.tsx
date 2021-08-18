import { faClone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

import computer from "../../../public/computer.png";
import BlockMessage from "../BlockMessage";
import MainVideoPlayer from "../MainVideoPlayer";

const VideoSection: React.FC = (): React.ReactElement => {
  return (
    <Section>
      <ImageWrapper>
        <Image src={computer} alt="computer" />
      </ImageWrapper>
      <ImageBackground />
      <MainVideoPlayer src={"/example.mp4"} type={"video/mp4"} />
      <SentenceWrapper>
        <Sentence>
          Generate Your Page using React Web editor.
        </Sentence>
        <SubSentence>
          Lets Download our library!
        </SubSentence>
        <BlockMessage icon={faClone} message={"npm -i react-web-editor"} />
      </SentenceWrapper>
    </Section>
  );
};

const ImageWrapper = styled.div`
  width: 38rem;
  margin: 2rem 0 0 -26rem;
  position: absolute;
  z-index: 1;
`;

const ImageBackground = styled.div`
  width: 36rem;
  height: 23rem;
  margin: 2rem 0 0 -26rem;
  background-color: ${({ theme }) => theme.FooterBackgroundColor};
  position: absolute;
  z-index: -1;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  height: 40rem;
  margin: 9rem 0 0 0;
`;

const SentenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28%;
  margin: 3rem 0 0 40rem;
  font-family: "Playfair Display", serif;
`;

const Sentence = styled.p`
  margin: 0;
  font-size: 2rem;

  ::first-letter {
    font-size: 4rem;
  }
`;

const SubSentence = styled.p`
  margin: 0;
  font-size: 2rem;
`;

export default VideoSection;
