import PropTypes from "prop-types"
import React from "react"
import { Icon } from "@elements"
import { useToggle } from "@hooks"

const MobileMenu = ({ className }) => {
  const [menuIsActive, __, toggleMenuIsActive] = useToggle()
  const iconName = menuIsActive ? "close" : "burger"
  return (
    <div className={className}>
      <button
        role="button"
        onClick={toggleMenuIsActive}
        className="focus:outline-none focus:text-gray-700"
      >
        <Icon name={iconName} />
      </button>
      {menuIsActive && (
        <nav className="absolute inset-x-0 bottom-0 transform translate-y-full bg-white">
          Mobile Nav
        </nav>
      )}
    </div>
  )
}

MobileMenu.propTypes = {
  className: PropTypes.string,
}

export default MobileMenu
