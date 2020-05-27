import PropTypes from "prop-types"
import { MainMenu, SubMenu } from "@elements"

export const Sidebar = ({ className, submenu }) => {
  return (
    <aside className={`sidebar ${className}`}>
      <div className="max-h-screen overflow-y-scroll py-16 px-8 text-sm text-gray-600">
        <MainMenu className="mb-8" />
        <SubMenu menus={submenu} />
      </div>
    </aside>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  submenu: PropTypes.array.isRequired,
}
