import { faClone } from "@fortawesome/free-solid-svg-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import BlockMessage from ".";

export default {
  title: "Main/BlockMessage",
  component: BlockMessage,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof BlockMessage>;

const Template: ComponentStory<typeof BlockMessage> = (args) => <BlockMessage { ...args } />;

export const Default = Template.bind({});

Default.args = {
  icon: faClone,
  message: "happy",
};
