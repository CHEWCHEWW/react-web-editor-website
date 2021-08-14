import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import DragAndDropPhrase from "../DragAndDropPhrase";
import BounceMessage from "../shared/BounceMessage";

const CodeEditor = dynamic(
  () => import("../CodeEditor"),
  { ssr: false }
);

const DragAndDropSection: React.FC = (): React.ReactElement => {
  return (
    <Section>
      <DragAndDropPhrase />
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
      <BounceMessage animation="bounceUp">
        Change Order
        <FontAwesomeIcon className={"arrow"} icon={faArrowUp} />
      </BounceMessage>
      <CodeEditorWrapper>
        <CodeEditor code={DRAG_AND_DROP_BLOCK} />
      </CodeEditorWrapper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  width: 80rem;
  height: 53rem;
  margin: 14rem 0 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DragAndDropTableWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 14.3rem;
  margin: 3rem 0;
  justify-content: center;
  background-color: #ebebe7;
`;

const ImageWrapper = styled.div`
  height: 90%;
  margin: 0.5rem 0.3rem;
`;

const CodeEditorWrapper = styled.div`
  width: 55%;
  margin : 3.5rem 0 0 0;
`;

export default DragAndDropSection;
