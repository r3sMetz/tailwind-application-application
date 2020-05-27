import PropTypes from "prop-types"
import React from "react"

export const DefaultLayout = ({ children }) => {
  return <div>{children}</div>
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
}
