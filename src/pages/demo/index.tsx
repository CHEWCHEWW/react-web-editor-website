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
        {/* <div style={{ position: "absolute", width: "100%", height: "100%",backgroundColor: "pink" }}></div> */}

      </TextEditorBlock>
    </div>
  );
};

export default demo;
