import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { STYLE_EDITOR_BLOCK } from "../../constants/codeExample";
import CodeEditor from ".";

export default {
  title: "Main/CodeEditor",
  component: CodeEditor,
  decorators: [
    (Story) => (
      <div style={{ fontSize: "0.9rem", borderRadius: "0.5rem", overflow: "hidden" }}>
        <Story />
      </div>
    )
  ],
} as ComponentMeta<typeof CodeEditor>;

const Template: ComponentStory<typeof CodeEditor> = (args) => <CodeEditor { ...args } />;

export const Default = Template.bind({});

Default.args = {
  code: STYLE_EDITOR_BLOCK,
};
