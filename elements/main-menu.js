import PropTypes from "prop-types"
import React from "react"
import Link from "next/link"
import { mainMenuData } from "@data"
import { RUIcon } from "@elements"

export const MainMenu = ({ className }) => {
  return (
    <ul className={className}>
      <li className="flex items-center space-x-2">
        <RUIcon name="user" />
        <Link href="/my-job-application">
          <a className="py-2 inline-block hover:text-gray-800 font-bold">
            My Job Application
          </a>
        </Link>
      </li>
      {mainMenuData.map((menuItem, key) => (
        <li key={key} className="flex items-center space-x-2">
          <RUIcon name={menuItem.iconName} />
          <Link href="#">
            <a className="py-2 inline-block hover:text-gray-800">
              {menuItem.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

MainMenu.propTypes = {
  className: PropTypes.string,
}
