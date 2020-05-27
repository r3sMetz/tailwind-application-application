import PropTypes from "prop-types"
import React from "react"

export const Slot = ({ chilren }) => {
  return <>{children}</>
}

Slot.propTypes = {
  chilren: PropTypes.node.isRequired,
}
