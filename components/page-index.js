import PropTypes from "prop-types"
import React from "react"

export const PageIndex = ({ className }) => {
  return <nav className={`h-64 bg-gray-200 ${className}`}>PageIndex</nav>
}

PageIndex.propTypes = {
  className: PropTypes.string,
}
