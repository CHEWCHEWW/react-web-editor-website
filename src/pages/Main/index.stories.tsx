import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import * as HeaderStories from "../../components/Header/index.stories";
import Page from ".";

export default {
  title: "Example/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});

LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});

LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
