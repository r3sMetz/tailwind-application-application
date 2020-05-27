import React from "react"
import { Icon } from "@elements"
import IconSVGS from "@elements/icon/icon-svgs"
import { withPadding } from "@customDecorators"

const allIconNames = Object.keys(IconSVGS)

export default {
  title: "Elements/Icon",
  component: Icon,
  decorators: [withPadding],
}

export const Base = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-gray-600">
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
)
