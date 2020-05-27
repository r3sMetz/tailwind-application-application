import React, { useRef, useLayoutEffect } from "react"
import hljs from "highlight.js"

export const Code = ({ children, className }) => {
  const ref = useRef()
  useLayoutEffect(() => {
    hljs.highlightBlock(ref.current)
  }, [])
  return (
    <div className={`p-5 bg-gray-900 ${className}`} ref={ref}>
      {children}
    </div>
  )
}
