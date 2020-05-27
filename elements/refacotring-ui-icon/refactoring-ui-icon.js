import PropTypes from "prop-types"
import IconSvgs from "./refactoring-ui-icon-svgs"

export const RUIcon = ({ className, name, primaryClass, secondaryClass }) => {
  const iconClass = className ? className : ""
  const { width, height, description } = IconSvgs[`${name}`]

  return (
    <svg
      className={`fill-current ${iconClass}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {description(primaryClass, secondaryClass)}
    </svg>
  )
}

RUIcon.propTypes = {
  className: PropTypes.string,
  primaryClass: PropTypes.string,
  secondaryClass: PropTypes.string,
  name: PropTypes.string,
}

RUIcon.defaultProps = {
  primaryClass: "text-gray-700",
  secondaryClass: "text-gray-400",
}
