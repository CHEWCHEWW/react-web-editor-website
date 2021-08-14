import React from "react";
import { StyleEditorBlock } from "react-web-editor";
import styled from "styled-components";

import { CircleStyleEditorBlockProps } from "../../types/style";

interface CircleProps {
  color: string;
}

const CircleStyleEditorBlock: React.FC<CircleStyleEditorBlockProps> = ({
  width,
  height,
  left,
  top,
  parentStyle,
  unit,
  color,
}): React.ReactElement => {
  return (
    <StyleEditorBlock
      width={width}
      height={height}
      left={left}
      top={top}
      parentStyle={parentStyle}
      unit={unit}
    >
      <Circle color={color} />
    </StyleEditorBlock>
  );
};

const Circle = styled.div<CircleProps>`
  width: 100%;
  height: 100%;
  border-radius: 70px;
  background-color: ${({ color }) => color};
  position: absolute;
`;

export default CircleStyleEditorBlock;
