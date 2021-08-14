import React from "react";
import { EditableBoard, TextEditorBlock } from "react-web-editor";
import styled from "styled-components";

import { TextEditableBoardProps } from "../../types/style";

const TextEditableBoard: React.FC<TextEditableBoardProps> = ({
  left,
  top,
  unit,
  color,
  parentStyle,
  backgroundColor,
  initialFontName,
  initialFontSize,
  initialFontStyle,
  initialText,
  children,
}) => {
  return (
    <Wrapper>
      <EditableBoard
        unit={unit}
        width={parentStyle.width}
        height={parentStyle.height}
        backgroundColor={backgroundColor}
      >
        {children}
        <TextEditorBlock
          unit={unit}
          width={14}
          height={5}
          top={top}
          left={left}
          parentStyle={parentStyle}
          initialText={initialText}
          initialFontColor={color}
          initialFontSize={initialFontSize}
          initialFontName={initialFontName}
          initialFontStyle={initialFontStyle}
        />
      </EditableBoard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background: linear-gradient(125deg, #adb3dd, #e0ebc4);
`;

export default TextEditableBoard;
