import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import * as HeaderStories from "../components/Header/index.stories";
import Home from ".";

export default {
  title: "Example/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const LoggedIn = Template.bind({});

LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});

LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
