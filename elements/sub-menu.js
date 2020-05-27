import PropTypes from "prop-types"
import Link from "next/link"
import React from "react"

export const SubMenu = ({ menus }) => {
  return (
    <nav className="space-y-6">
      {menus.map((menu, menuKey) => (
        <div key={menuKey}>
          <h5 className="text-xs mb-2 text-gray-500 uppercase font-semibold">
            {menu.title}
          </h5>
          <ul>
            {menu.items.map((item, itemKey) => (
              <li key={itemKey}>
                <Link href={item.href}>
                  <a className="py-2 inline-block hover:text-gray-800">
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

SubMenu.propTypes = {
  menus: PropTypes.array,
}
