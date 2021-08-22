import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import TextEditableBoard from ".";

export default {
  title: "Main/TextEditableBoard",
  component: TextEditableBoard,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof TextEditableBoard>;

const Template: ComponentStory<typeof TextEditableBoard> = (args) => <TextEditableBoard { ...args } />;

export const Default = Template.bind({});

Default.args = {
  left: 0,
  top: 0,
  unit: "rem",
  color: "red",
  parentStyle: { width: 10, height: 10 },
  backgroundColor: "yellow",
  initialFontStyle: "style-script",
  initialFontName: "roboto",
  initialText: "happy",
  initialFontSize: 0.3,
};
