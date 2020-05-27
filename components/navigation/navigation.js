import PropTypes from "prop-types"
import React from "react"
import { Logo } from "@elements"
import MobileMenu from "./_mobile-menu"
import DesktopMenu from "./_desktop-menu"
import Searchbar from "./_searchbar"

export const Navigation = ({ submenu, emphasized }) => {
  const spacingClasses = emphasized ? "p-6" : "px-6 py-3"
  const logoClasses = emphasized ? "h-12 w-auto" : "h-10 w-auto"
  return (
    <div style={{ height: "200vh" }}>
      <nav
        className={`border-b-2 border-gray-200 sticky top-0 inset-x-0 z-40 flex items-center justify-between space-x-5 lg:space-x-20 text-gray-500 ${spacingClasses}`}
      >
        <Logo className={logoClasses} />
        <Searchbar className="flex-1" emphasized={emphasized} />
        <MobileMenu className="lg:hidden" submenu={submenu} />
        <DesktopMenu className="hidden lg:flex" />
      </nav>
    </div>
  )
}

Navigation.propTypes = {
  submenu: PropTypes.array.isRequired,
  emphasized: PropTypes.bool,
}
