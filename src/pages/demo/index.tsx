import React from "react";
import { StyleEditorBlock } from "react-web-editor";
import styled from "styled-components";

const demo = () => {
  return (
    <div>
      <StyleEditorBlock 
        width={200}
        height={300}
        top={400}
        left={300}
      >
        {/* <div style={{ position: "absolute", width: "100%", height: "100%",backgroundColor: "pink" }}></div> */}

      </StyleEditorBlock>
    </div>
  );
};

export default demo;
