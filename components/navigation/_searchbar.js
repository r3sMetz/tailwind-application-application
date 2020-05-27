import PropTypes from "prop-types"
import React from "react"

const Searchbar = ({ className }) => {
  return (
    <form className={`inline-block ${className}`}>
      <input
        type="text"
        className="w-full inline-block shadow-lg rounded-lg px-4 py-3"
        value=""
        placeholder={`Serach the docs (Press "/" to focus)`}
      />
    </form>
  )
}

Searchbar.propTypes = {
  className: PropTypes.string,
}

export default Searchbar
