import React from "react";
import { TextEditorBlock } from "react-web-editor";

const demo = () => {
  return (
    <div>
      <TextEditorBlock
        width={20}
        height={20}
        top={20}
        left={20}
        unit={"rem"}
      >
        continue
      </TextEditorBlock>
    </div>
  );
};

export default demo;
