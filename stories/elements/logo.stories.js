import React from "react"
import { Logo } from "@elements"
import { withPadding } from "@customDecorators"

export default {
  title: "Elements/Logo",
  component: Logo,
  decorators: [withPadding],
}

export const Base = () => <Logo />
