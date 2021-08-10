import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import CodeEditor from ".";

export default {
  title: "Main/CodeEditor",
  component: CodeEditor,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof CodeEditor>;

const Template: ComponentStory<typeof CodeEditor> = (args) => <CodeEditor { ...args } />;

export const Default = Template.bind({});

Default.args = {
  code: "function happy() {",
};
