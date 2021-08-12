import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import TextEditorSection from ".";

export default {
  title: "Main/TextEditorSection",
  component: TextEditorSection,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof TextEditorSection>;

const Template: ComponentStory<typeof TextEditorSection> = (args) => <TextEditorSection { ...args } />;

export const Default = Template.bind({});
