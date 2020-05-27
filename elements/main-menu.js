import PropTypes from "prop-types"
import React from "react"
import Link from "next/link"
import { mainMenuData } from "@data"
import { RUIcon } from "@elements"

export const MainMenu = ({ className }) => {
  return (
    <ul className={`leading-9 ${className}`}>
      {mainMenuData.map((menuItem, key) => (
        <li key={key} className="flex items-center space-x-2">
          <RUIcon name={menuItem.iconName} />
          <Link href={menuItem.href}>
            <a className="hover:text-gray-800">{menuItem.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

MainMenu.propTypes = {
  className: PropTypes.string,
}
