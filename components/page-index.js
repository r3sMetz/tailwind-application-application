import PropTypes from "prop-types"
import React from "react"

export const PageIndex = ({ className, links }) => {
  return (
    <nav className={`h-64 text-sm text-gray-600 ${className}`}>
      <h5 className="text-xs mb-2 text-gray-500 uppercase font-semibold">
        On this Page
      </h5>
      <ul>
        {links.map((link, key) => (
          <li key={key}>
            <a
              href={link.href}
              className="py-2 inline-block hover:text-gray-800"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

PageIndex.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array,
}
