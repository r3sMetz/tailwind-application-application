import PropTypes from "prop-types"
import React from "react"
import { Navbar, Sidebar, PageIndex } from "@components"

export const DefaultLayout = ({ children, submenu }) => {
  return (
    <>
      <Navbar submenu={submenu} />
      <div className="flex container">
        <Sidebar className="hidden lg:block lg:w-1/5" submenu={submenu} />
        <main className="py-10 lg:pl-8 lg:flex items-start flex-1" id="main">
          <div className="lg:flex-1 bg-red-400" style={{ height: "200vh" }}>
            {children}
          </div>
          <PageIndex className="page-index hidden lg:block lg:w-1/4" />
        </main>
      </div>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
  submenu: PropTypes.array,
}
