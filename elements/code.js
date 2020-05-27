import React, { useRef, useEffect } from "react"
import hljs from "highlight.js"

export const Code = ({ children, className }) => {
  const ref = useRef()
  useEffect(() => {
    hljs.highlightBlock(ref.current)
  }, [])
  return (
    <div className={`p-5 bg-gray-900 overflow-hidden ${className}`} ref={ref}>
      {children}
    </div>
  )
}
