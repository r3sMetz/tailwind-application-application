import PropTypes from "prop-types"
import React from "react"
import { Icon } from "@elements"

export const SocialMedia = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/r3sMetz/tailwind-application-application"
          className="hover:text-gray-700"
        >
          <Icon name="github" className="w-5 h-auto" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/tailwindcss"
          className="hover:text-gray-700"
        >
          <Icon name="twitter" className="w-5 h-auto" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.com/invite/7NF8GNe"
          className="hover:text-gray-700"
        >
          <Icon name="discord" className="w-5 h-auto" />
        </a>
      </li>
    </ul>
  )
}

SocialMedia.propTypes = {
  className: PropTypes.string,
}
