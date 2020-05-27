import React, { useRef } from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import { Navbar, Sidebar, PageIndex } from "@components"
import { useAnchorLinks } from "@hooks"

export const DefaultLayout = ({ children, submenu, metadata }) => {
  const ref = useRef()
  const links = useAnchorLinks(ref)
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Navbar submenu={submenu} />
      <div className="lg:flex container">
        <Sidebar className="hidden lg:block lg:w-1/5" submenu={submenu} />
        <main
          className="py-10 lg:pl-8 items-start lg:flex-1 lg:flex space-x-16"
          id="main"
          ref={ref}
        >
          <div className="markdown flex-1">{children}</div>
          <PageIndex
            links={links}
            className="page-index hidden lg:block lg:w-1/4"
          />
        </main>
      </div>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
  submenu: PropTypes.array,
}
