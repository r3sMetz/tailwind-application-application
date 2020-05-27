import React from "react"
import { Sidebar } from "@components"
import { submenuDocsData } from "@data"

export default {
  title: "Components/Sidebar",
  component: Sidebar,
}

export const Base = () => (
  <Sidebar className="max-h-screen max-w-xs" submenu={submenuDocsData} />
)
