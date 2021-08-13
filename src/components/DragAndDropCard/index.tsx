import Image from "next/image";
import React from "react";
import { DragAndDropTable } from "react-web-editor";
import styled from "styled-components";

import cat from "../../../public/cat.jpg";
import mosque from "../../../public/mosque.jpg";
import sky from "../../../public/sky.jpg";
import snow from "../../../public/snow.jpg";


const DragAndDropCard: React.FC = (): React.ReactElement => {
  return (
    <CardWrapper>
      <DragAndDropTable isVertical={true}>
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
    </CardWrapper>
  );
};

const CardWrapper = styled.section`
  width: 23rem;
  height: 62rem;
  margin: 4rem 0 0 0;
  background-color: #F0F0ED;
`;

const ImageWrapper = styled.div`
  width: 23rem;
  height: 13.5rem;
  margin: 1rem;
`;

export default DragAndDropCard;
