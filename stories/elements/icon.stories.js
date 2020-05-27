import React from "react"
import { Icon, RUIcon } from "@elements"
import IconSVGS from "@elements/icon/icon-svgs"
import RUIconSVGS from "@elements/refacotring-ui-icon/refactoring-ui-icon-svgs"
import { withPadding } from "@customDecorators"

const allIconNames = Object.keys(IconSVGS)
const allRUIconNames = Object.keys(RUIconSVGS)

export default {
  title: "Elements/Icon",
  component: Icon,
  decorators: [withPadding],
}

export const All = () => (
  <>
    <div className="text-gray-600 mb-12">
      <h2 className="text-2xl mb-6">Default Icons (Icon)</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {allIconNames.map((name) => (
          <article
            key={name}
            className="text-center p-5 bg-white shadow-lg rounded-lg"
          >
            <Icon className="inline-block h-8 w-auto" name={name} />
            <h3>{name}</h3>
          </article>
        ))}
      </div>
    </div>
    <div className="text-gray-600 mb-12">
      <h2 className="text-2xl mb-6">RefactoringUI Icons (RUIcon)</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {allRUIconNames.map((name) => (
          <article
            key={name}
            className="text-center p-5 bg-white shadow-lg rounded-lg"
          >
            <RUIcon className="inline-block h-8 w-auto" name={name} />
            <h3>{name}</h3>
          </article>
        ))}
      </div>
    </div>
  </>
)
