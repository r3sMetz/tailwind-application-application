import React from "react"
import { Navigation } from "@components"
import Searchbar from "@components/navigation/_searchbar"
import { withPadding } from "@customDecorators"
import { submenuDocsData } from "@data"

export default {
  title: "Components/Navigation",
  component: Navigation,
}

export const Base = () => <Navigation submenu={submenuDocsData} />
export const Search = () => <Searchbar className="bg-white min-w-full" />

Search.story = {
  decorators: [withPadding],
}
