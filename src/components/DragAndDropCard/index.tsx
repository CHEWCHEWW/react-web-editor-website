import React from "react";
import { DragAndDropTable } from "react-web-editor";
import styled from "styled-components";

import cat from "../../../public/cat.jpg";
import mosque from "../../../public/mosque.jpg";
import sky from "../../../public/sky.jpg";
import snow from "../../../public/snow.jpg";
import CustomImage from "../CustomImage";

const DragAndDropCard: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <DragAndDropTable isVertical={false}>
        <CustomImage src={cat} alt={"cat"} />
        <CustomImage src={mosque} alt={"mosque"} />
        <CustomImage src={sky} alt={"sky"} />
        <CustomImage src={snow} alt={"snow"} />
      </DragAndDropTable>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 14rem;
  margin: 2.5rem 0;
  justify-content: center;
`;

export default DragAndDropCard;
