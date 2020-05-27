import React from "react"
import { Logo } from "@elements"
import MobileMenu from "./_mobile-menu"
import DesktopMenu from "./_desktop-menu"
import Searchbar from "./_searchbar"

export const Navigation = () => {
  return (
    <nav className="border-b-2 border-gray-200 sticky px-6 py-6 top-0 inset-x-0 z-40 flex items-center justify-between space-x-5 lg:space-x-20 text-gray-500">
      <Logo />
      <Searchbar className="flex-1" />
      <MobileMenu className="lg:hidden" />
      <DesktopMenu className="hidden lg:flex" />
    </nav>
  )
}
