import React from "react"
import { Navbar } from "@components"
import Searchbar from "@components/navbar/_searchbar"
import { withPadding } from "@customDecorators"
import { submenuDocsData } from "@data"

export default {
  title: "Components/Navigation",
  component: Navbar,
}

export const Base = () => <Navbar submenu={submenuDocsData} />
export const Emphasized = () => <Navbar submenu={submenuDocsData} emphasized />
export const Search = () => <Searchbar className="bg-white min-w-full" />

Search.story = {
  decorators: [withPadding],
}
