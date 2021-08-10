import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Home from ".";

export default {
  title: "Example/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Default = Template.bind({});
