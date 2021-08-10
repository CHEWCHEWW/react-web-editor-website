export const STYLE_EDITOR_BLOCK = `import { SyledEditorBlock } from "react-web-editor"
  ...
  return (
    <StyleEditorBlock 
      width={300} 
      height={100} 
      top={500} 
      left={800}
      parentStyle={{width: 500, height: 300, left: 200, top: 200}}
    >
      <TestDiv>happy</TestDiv>
    </StyleEditorBlock>
  );
`;
