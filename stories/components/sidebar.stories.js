import React from "react"
import { Sidebar } from "@components"
import { SubMenu } from "@elements"
import { submenuDocsData } from "@data"

export default {
  title: "Components/Sidebar",
  component: Sidebar,
}

export const Base = () => (
  <Sidebar className="max-h-screen max-w-xs">
    <SubMenu menus={submenuDocsData} />
  </Sidebar>
)
