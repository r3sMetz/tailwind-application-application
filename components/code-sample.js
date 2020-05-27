import PropTypes from "prop-types"
import React from "react"
import { Code } from "@elements"
import { useSlots } from "@hooks"

export const CodeSample = ({ children, className, ...props }) => {
  const Slots = useSlots(children, ["jsx", "code"])
  return (
    <div className="relative overflow-hidden mb-8">
      <div
        className={`bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 ${className}`}
        {...props}
      >
        {Slots.jsx}
      </div>
      <Code className="rounded-b-lg bg-gray-800">{Slots.code}</Code>
    </div>
  )
}

CodeSample.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
