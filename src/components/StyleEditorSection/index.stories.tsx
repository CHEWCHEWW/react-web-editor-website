import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import StyleEditorSection from ".";

export default {
  title: "Main/StyleEditorSection",
  component: StyleEditorSection,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof StyleEditorSection>;

const Template: ComponentStory<typeof StyleEditorSection> = (args) => <StyleEditorSection { ...args } />;

export const Default = Template.bind({});
