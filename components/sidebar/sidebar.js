import PropTypes from "prop-types"
import { MainMenu } from "@elements"

export const Sidebar = ({ children, className }) => {
  return (
    <aside className={`sidebar ${className}`}>
      <div className="max-h-screen overflow-y-scroll py-16 px-8 text-sm text-gray-600">
        <MainMenu className="mb-8" />
        {children}
      </div>
    </aside>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node,
}
