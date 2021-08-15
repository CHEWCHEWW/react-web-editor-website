import React from "react";
import { EditableBoard } from "react-web-editor";
import styled from "styled-components";

import { CircleStyleEditorBlockProps, ComponentSize } from "../../types/style";
import CircleStyleEditorBlock from "../CircleStyleEditorBlock";

interface StyleEditorCardProps {
  editorStyles: CircleStyleEditorBlockProps[];
  unit: string;
  editorBoardSize: ComponentSize;
  backgroundColor: string;
}

const StyleEditorCard: React.FC<StyleEditorCardProps> = ({
  editorStyles,
  unit,
  editorBoardSize,
  backgroundColor,
}): React.ReactElement => {
  return (
    <EditorCardWrapper>
      <EditableBoard
        unit={unit}
        width={editorBoardSize.width}
        height={editorBoardSize.height}
        backgroundColor={backgroundColor}
      >
        {editorStyles.map((editorStyle, index) => (
          <CircleStyleEditorBlock
            key={index}
            width={editorStyle.width}
            height={editorStyle.height}
            top={editorStyle.top}
            left={editorStyle.left}
            color={editorStyle.color}
            unit={editorStyle.unit}
            parentStyle={editorBoardSize}
          />
        ))}
      </EditableBoard>
    </EditorCardWrapper>
  );
};

const EditorCardWrapper = styled.div`
  display: flex;
  width: 45%;
  margin: 0.4rem 0 0 -3rem;
`;

export default StyleEditorCard;
