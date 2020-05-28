import PropTypes from "prop-types"
import React from "react"

export const PageIndex = ({ className, links }) => {
  return (
    <div className={`text-sm text-gray-600 ${className}`}>
      <h5 className="text-xs mb-2 text-gray-500 uppercase font-semibold">
        On this Page
      </h5>
      <ul className="mb-10">
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
      <article>
        <img
          className="w-full h-auto"
          src="/tailwind-ui-sidebar.png"
          alt="TailwindUI"
        />
        <p className="my-2">
          Beautiful UI components by the creators of Tailwind CSS.
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="text-gray-700 font-semibold hover:underline"
          href="https://tailwindui.com"
        >
          Learn more &rarr;
        </a>
      </article>
    </div>
  )
}

PageIndex.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array,
}
