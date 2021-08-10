import React from "react";
import styled from "styled-components";

interface EditorCardProps {
  width: number
  height: number
  top: number
  left: number
  backgroundColor: string
  unit: string
}

const EditorCard: React.FC<EditorCardProps> = ({
  width,
  height,
  top,
  left,
  backgroundColor,
  children,
  unit,
}): React.ReactElement => {
  return (
    <>
      <Board
        width={width}
        height={height}
        top={top}
        left={left}
        backgroundColor={backgroundColor}
        unit={unit}
      />
      {children}
    </>
  );
};

const Board = styled.div<EditorCardProps>`
  width: ${({ width, unit }) => `${width}${unit}`};
  height: ${({ height, unit }) => `${height}${unit}`};
  top: ${({ top, unit }) => `${top}${unit}`};
  left: ${({ left, unit }) => `${left}${unit}`};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default EditorCard;
