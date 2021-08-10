import "codemirror/lib/codemirror.css";
import "codemirror/theme/base16-light.css";
import "codemirror/mode/javascript/javascript";

import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import styled from "styled-components";

const CodeEditor: React.FC = (): React.ReactElement => {
  return (
    <CodeEditorWrapper>
      <CodeMirror 
        value="function happy() {"
        options={{
          lineWrapping: true,
          lineNumbers: true,
          mode: "javascript",
          theme: "base16-light",
          extraKeys: { Enter: false },
        }}
      />
    </CodeEditorWrapper>
  );
};

const CodeEditorWrapper = styled.div`
  width: 30%;
  font-weight: 600;
`;

export default CodeEditor;
