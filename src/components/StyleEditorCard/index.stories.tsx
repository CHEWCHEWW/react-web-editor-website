import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import StyleEditorCard from ".";

export default {
  title: "Main/StyleEditorCard",
  component: StyleEditorCard,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof StyleEditorCard>;

const Template: ComponentStory<typeof StyleEditorCard> = (args) => <StyleEditorCard { ...args } />;

export const Default = Template.bind({});
