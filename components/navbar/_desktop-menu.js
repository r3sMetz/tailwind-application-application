import PropTypes from "prop-types"
import React from "react"
import { VersionPicker, SocialMedia } from "@elements"

const DesktopMenu = ({ className }) => {
  return (
    <nav className={`flex space-x-6 ${className}`}>
      <VersionPicker />
      <SocialMedia className="flex space-x-4" />
    </nav>
  )
}

DesktopMenu.propTypes = {
  className: PropTypes.string,
}

export default DesktopMenu
