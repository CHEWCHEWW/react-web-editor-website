export const STYLE_EDITOR_BLOCK = `import { StyledEditorBlock } from "react-web-editor"
  ...
  return (
    <StyleEditorBlock
      width={300}
      height={100}
      top={20}
      left={30}
      unit={"rem"}
      parentStyle={{ width: 500, height: 300 }}
    >
      <Circle color={"#F2BFB5"} />
    </StyleEditorBlock>
  );
`;

export const TEXT_EDITOR_BLOCK = `import { TextEditorBlock } from "react-web-editor"
  ...
  return (
    <TextEditorBlock
      width={300}
      height={100}
      top={500}
      left={800}
      unit={"rem"}
      parentStyle={{ width: 500, height: 300 }}
    />
  );
`;

export const DRAG_AND_DROP_BLOCK = `import { DragAndDropTable } from "react-web-editor"
  ...
  return (
    <DragAndDropTable isVertical={false}>
      <img src={cat} alt="cat" />
      <img src={mosque} alt="mosque" />
      <img src={sky} alt="sky" />
      <img src={snow} alt="snow" />
    </DragAndDropTable>
  );
`;

export const HOOK_USAGE_EXAMPLE = `import React, { useState } from "react";
import { DraggableHandler, useDraggable } from "react-web-editor"
  ...
  const [componentStyle, setComponentStyle] = useState<ComponentStyle>({
    width,
    height,
    top,
    left,
  });

  const {
    handleDragStart,
    handleDragEnd,
  } = useResize({
    ...componentStyle,
    unit,
    onDrag: setComponentStyle,
    dragBoardOption: parentStyle,
  });
  ...
`;
