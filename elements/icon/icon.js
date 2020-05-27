import PropTypes from "prop-types"
import IconSvgs from "./icon-svgs"

export const Icon = ({ className, name }) => {
  const iconClass = className ? className : ""
  const { width, height, description, title } = IconSvgs[`${name}`]

  return (
    <svg
      className={`fill-current ${iconClass}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <title>{title}</title>
      {description()}
    </svg>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
}
