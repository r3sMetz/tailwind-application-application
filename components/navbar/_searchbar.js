import PropTypes from "prop-types"
import React from "react"

const Searchbar = ({ className, emphasized }) => {
  const appearenceClasses = emphasized ? "bg-white shadow-lg" : "bg-gray-300"
  return (
    <form className={`inline-block ${className}`}>
      <input
        type="text"
        className={`w-full inline-block rounded-lg px-4 py-3 ${appearenceClasses}`}
        placeholder={`Serach the docs (Not ready yet)`}
      />
    </form>
  )
}

Searchbar.propTypes = {
  className: PropTypes.string,
  emphasized: PropTypes.bool,
}

export default Searchbar
