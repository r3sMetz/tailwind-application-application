import PropTypes from "prop-types"
import React from "react"
import { Icon } from "@elements"
import { useToggle } from "@hooks"
import { MainMenu, VersionPicker, SubMenu } from "@elements"

const MobileMenu = ({ className, submenu }) => {
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
        <div className="absolute p-6 max-h-screen overflow-y-scroll inset-x-0 bottom-0 transform translate-y-full bg-white space-y-6">
          <VersionPicker />
          <MainMenu />
          <SubMenu menus={submenu} />
        </div>
      )}
    </div>
  )
}

MobileMenu.propTypes = {
  className: PropTypes.string,
  submenu: PropTypes.array.isRequired,
}

export default MobileMenu
