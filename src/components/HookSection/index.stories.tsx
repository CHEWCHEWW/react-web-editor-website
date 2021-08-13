import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import HookSection from ".";

export default {
  title: "Main/HookSection",
  component: HookSection,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof HookSection>;

const Template: ComponentStory<typeof HookSection> = (args) => <HookSection { ...args } />;

export const Default = Template.bind({});
