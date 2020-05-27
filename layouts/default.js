import PropTypes from "prop-types"
import Head from "next/head"
import React from "react"
import { Navbar, Sidebar, PageIndex } from "@components"

export const DefaultLayout = ({ children, submenu, metadata }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Navbar submenu={submenu} />
      <div className="flex container">
        <Sidebar className="hidden lg:block lg:w-1/5" submenu={submenu} />
        <main
          className="py-10 lg:pl-8 items-start lg:w-4/5 lg:flex space-x-16"
          id="main"
        >
          <div className="markdown">{children}</div>
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
