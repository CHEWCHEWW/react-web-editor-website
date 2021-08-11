import "codemirror/lib/codemirror.css";
import "codemirror/theme/panda-syntax.css";
import "codemirror/mode/jsx/jsx";

import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import styled from "styled-components";

interface CodeEditorProps {
  code: string
}

const CodeEditor: React.FC<CodeEditorProps> = ({ 
  code, 
}): React.ReactElement => {
  return (
    <CodeEditorWrapper>
      <CodeMirror 
        value={code}
        options={{
          lineWrapping: true,
          lineNumbers: true,
          mode: "text/jsx",
          theme: "panda-syntax",
          extraKeys: { Enter: false },
          tabSize: 2,
          readOnly: true,
        }}
      />
    </CodeEditorWrapper>
  );
};

const CodeEditorWrapper = styled.div`
  font-size: 0.9rem;
  border-radius: 2rem;
  
  .CodeMirror {
    border-radius: 0.5rem;
    /* position: absolute; */
  }

  .CodeMirror-scroll {
    height: auto;
    overflow: hidden;
  }
`;

export default CodeEditor;
