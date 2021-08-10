import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Header from ".";

export default {
  title: "Main/Header",
  component: Header,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header { ...args } />;

export const Default = Template.bind({});
