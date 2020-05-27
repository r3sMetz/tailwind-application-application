import PropTypes from "prop-types"
import { MainMenu, SubMenu } from "@elements"

export const Sidebar = ({ className, submenu }) => {
  return (
    <aside className={`sidebar ${className}`}>
      <div className="max-h-screen sticky top-0 overflow-y-scroll py-10 pr-8 text-sm text-gray-600">
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
