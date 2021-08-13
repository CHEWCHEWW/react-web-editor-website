import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { DragAndDropTable } from "react-web-editor";
import styled from "styled-components";

import cat from "../../../public/cat.jpg";
import mosque from "../../../public/mosque.jpg";
import sky from "../../../public/sky.jpg";
import snow from "../../../public/snow.jpg";
import { DRAG_AND_DROP_BLOCK } from "../../constants/codeExample";


const CodeEditor = dynamic(
  () => import("../../components/CodeEditor"),
  { ssr: false }
);

const DragAndDropCard: React.FC = (): React.ReactElement => {
  return (
    <Section>
      <DragAndDropTableWrapper>
        <DragAndDropTable isVertical={false}>
          <ImageWrapper>
            <Image src={cat} alt="cat" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={mosque} alt="mosque" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={sky} alt="sky" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={snow} alt="snow" />
          </ImageWrapper>
        </DragAndDropTable>
      </DragAndDropTableWrapper>
      <CodeEditorWrapper>
        <CodeEditor code={DRAG_AND_DROP_BLOCK} />
      </CodeEditorWrapper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  width: 75rem;
  height: 30rem;
  margin: 4rem 0 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DragAndDropTableWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 26%;
  margin: 1rem 0 5rem 3rem;
  justify-content: center;
  background-color: #F0F0ED;
`;

const ImageWrapper = styled.div`
  height: 100%;
  margin: 0.5rem 0.3rem;
`;

const CodeEditorWrapper = styled.div`
  width: 55%;
  margin : 5rem 0 0 0;
`;

export default DragAndDropCard;
