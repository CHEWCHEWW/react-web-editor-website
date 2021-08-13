import React from "react";
import { EditableBoard, TextEditorBlock } from "react-web-editor";
import styled from "styled-components";

const MultiOptionSection: React.FC = (): React.ReactElement => {
  return (
    <OptionSection>
      <Grid>
        <div>
          <EditableBoard
            unit={"rem"}
            width={17}
            height={17}
            backgroundColor={"#f1d0ca"}
          >
            <TextEditorBlock
              unit={"rem"}
              width={14}
              height={5}
              top={6.2}
              left={1.8}
              parentStyle={{ width: 17, height: 17 }}
              initialText={"My Font"}
              initialFontColor={"#ED9390"}
              initialFontSize={0.6}
              initialFontName={"stix-two-text"}
              initialFontStyle={"box-text"}
            />
          </EditableBoard>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <EditableBoard
            unit={"rem"}
            width={17}
            height={17}
            backgroundColor={"#ece1e1"}
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
              initialFontStyle={"down-side-text"}
            />
          </EditableBoard>
        </div>
      </Grid>
    </OptionSection>
  );
};

const OptionSection = styled.section`
  display: flex;
  width: 43rem;
  height: 43rem;
  margin: 5rem 0 0 0;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 17rem);
  grid-template-rows: repeat(2, 17rem);
  grid-gap: 2rem;
`;

export default MultiOptionSection;
