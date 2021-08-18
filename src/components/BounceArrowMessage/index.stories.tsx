import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import BounceArrowMessage from ".";

export default {
  title: "Main/BounceArrowMessage",
  component: BounceArrowMessage,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof BounceArrowMessage>;

const Template: ComponentStory<typeof BounceArrowMessage> = (args) => <BounceArrowMessage { ...args } />;

export const Default = Template.bind({});

Default.args = {
  message: "happy",
  animation: "bounce-up",
  icon: faArrowUp,
};
