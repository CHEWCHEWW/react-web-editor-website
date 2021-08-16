import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import MainVideoPlayer from ".";

export default {
  title: "Main/MainVideoPlayer",
  component: MainVideoPlayer,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof MainVideoPlayer>;

const Template: ComponentStory<typeof MainVideoPlayer> = (args) => <MainVideoPlayer { ...args } />;

export const Default = Template.bind({});

Default.args = {
  src: "/speedUp.mp4",
  type: "video/mp4",
};
