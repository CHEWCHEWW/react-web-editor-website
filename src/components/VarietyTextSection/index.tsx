import Image from "next/image";
import React from "react";
import { EditableBoard, TextEditorBlock } from "react-web-editor";
import styled from "styled-components";

import colorfulPattern from "../../../public/dot-pattern.png";
import VarietyTextSentence from "../VarietyTextSentence";

const VarietyTextSection: React.FC = (): React.ReactElement => {
  return (
    <OptionSection>
      <VarietyTextSentence />
      <ShiningText>
        Hover your cursor to text, Make your style!
      </ShiningText>
      <Grid>
        <TextEditorWrapper>
          <EditableBoard
            unit={"rem"}
            width={17}
            height={17}
            backgroundColor={"#f1d0ca"}
          >
            <Image src={colorfulPattern} alt="pattern" />
            <TextEditorBlock
              unit={"rem"}
              width={14}
              height={5}
              top={6.2}
              left={1.8}
              parentStyle={{ width: 17, height: 17 }}
              initialText={"My Font"}
              initialFontColor={"#FB9898"}
              initialFontSize={0.6}
              initialFontName={"stix-two-text"}
              initialFontStyle={"box-text"}
            />
          </EditableBoard>
        </TextEditorWrapper>
        <TextEditorWrapper>
          <EditableBoard
            unit={"rem"}
            width={17}
            height={17}
            backgroundColor={"#D1F0EF"}
          >
            <TextEditorBlock
              unit={"rem"}
              width={15}
              height={15}
              top={1.3}
              left={1.3}
              parentStyle={{ width: 17, height: 17 }}
              initialText={"Try Styling using mouse"}
              initialFontColor={"#f8fa85"}
              initialFontSize={0.6}
              initialFontName={"bebas-nenu"}
              initialFontStyle={"down-side-text"}
            />
          </EditableBoard>
        </TextEditorWrapper>
        <TextEditorWrapper>
          <EditableBoard
            unit={"rem"}
            width={17}
            height={17}
            backgroundColor={"#faf174"}
          >
            <TextEditorBlock
              unit={"rem"}
              width={15}
              height={6.5}
              top={5}
              left={1.2}
              parentStyle={{ width: 17, height: 17 }}
              initialText={"It's Default"}
              initialFontColor={"#ffffff"}
              initialFontSize={0.6}
              initialFontName={"montecarlo"}
              initialFontStyle={"twin-color-text"}
            />
          </EditableBoard>
        </TextEditorWrapper>
        <TextEditorWrapper>
          <EditableBoard
            unit={"rem"}
            width={17}
            height={17}
            backgroundColor={"transparent"}
          >
            <TextEditorBlock
              unit={"rem"}
              width={12}
              height={13}
              top={1.8}
              left={2.1}
              parentStyle={{ width: 17, height: 17 }}
              initialText={"Please hover me"}
              initialFontColor={"#7c7b8a"}
              initialFontSize={0.6}
              initialFontName={"roboto"}
              initialFontStyle={"out-line-text"}
            />
          </EditableBoard>
        </TextEditorWrapper>
      </Grid>
    </OptionSection>
  );
};

const ShiningText = styled.div`
  width: 60%;
  margin: 2rem;
  text-align: center;
  font-size: 2.5rem;
  font-family: "Montserrat", serif;
  font-weight: 600;
  background: linear-gradient(45deg, #daac78, #e4b3c5, #88a8ee, #af8dd3);
  background-clip: text;
  background-size: 300% 300%;
  animation: gradientText 3s ease infinite;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  @keyframes gradientText {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

const OptionSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60rem;
  height: 70rem;
  margin: 6rem 0 0 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 17rem);
  grid-template-rows: repeat(2, 17rem);
  grid-gap: 2rem;
  margin: 3rem 0 5rem 0;
`;

const TextEditorWrapper = styled.div`
  display: flex;
  background: linear-gradient(125deg, #adb3dd, #e0ebc4);
`;

export default VarietyTextSection;
