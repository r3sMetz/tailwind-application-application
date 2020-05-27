import { addParameters, addDecorator } from "@storybook/react"
import { withA11y } from "@storybook/addon-a11y"
import { customViewports, customBackgrounds } from "./global-parameters"
import "@styles/index.css"

// Global Parameters
addParameters({
  backgrounds: customBackgrounds,
  viewport: {
    viewports: customViewports,
  },
})

// Global Decorators
addDecorator(withA11y)
