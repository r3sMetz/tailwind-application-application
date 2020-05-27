const nextJSPlugins = ["tailwindcss", "postcss-preset-env"]
const storybookPlugins = [require("tailwindcss")]

module.exports = {
  plugins: process.env.IS_STORYBOOK ? storybookPlugins : nextJSPlugins,
}
