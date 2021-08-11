import React from "react";
import styled from "styled-components";

interface EditorCardProps {
  width: number
  height: number
  backgroundColor: string
  unit: string
}

const EditorCard: React.FC<EditorCardProps> = ({
  width,
  height,
  backgroundColor,
  children,
  unit,
}): React.ReactElement => {
  return (
    <>
      <Board
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        unit={unit}
      >
        {children}
      </Board>
    </>
  );
};

const Board = styled.div<EditorCardProps>`
  width: ${({ width, unit }) => `${width}${unit}`};
  height: ${({ height, unit }) => `${height}${unit}`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: absolute;
`;

export default EditorCard;
