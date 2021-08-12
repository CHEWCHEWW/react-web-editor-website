export const STYLE_EDITOR_BLOCK = `import { StyledEditorBlock } from "react-web-editor"
  ...
  return (
    <StyleEditorBlock
      width={300}
      height={100}
      top={20}
      left={30}
      parentStyle={{ width: 500, height: 300, left: 0.1, top: 0.1 }}
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
      parentStyle={{ width: 500, height: 300, left: 200, top: 200 }}
    />
  );
`;

