import PropTypes from "prop-types"
import React from "react"

export const AnchorLink = ({ href, title, className }) => {
  const handleClick = (e) => {
    if (typeof window === "undefined") return
    e.preventDefault()
    const aimAnchor = document.querySelector(href)
    const aimPosition = aimAnchor.offsetTop - 115
    console.log(aimPosition)
    window.scrollTo(0, aimPosition)
  }
  return (
    <a className={className} href={href} onClick={handleClick}>
      {title}
    </a>
  )
}

AnchorLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
