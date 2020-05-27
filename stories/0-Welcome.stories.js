import React from "react"
import { linkTo } from "@storybook/addon-links"
import { Welcome } from "@storybook/react/demo"

export default {
  title: "Welcome",
  component: Welcome,
}

export const ToStorybook = () => <div className="bg-red-500">Hello</div>

ToStorybook.story = {
  name: "to Storybook",
}
