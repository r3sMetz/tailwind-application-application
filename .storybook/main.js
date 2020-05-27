module.exports = {
  stories: ["../stories/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-viewport/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-storysource",
    "@storybook/addon-docs",
  ],
}
