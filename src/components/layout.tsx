/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"

function Layout({title = "", children}: LayoutProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title

            author
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header siteTitle={metaTitle} />
        <main className="pb-16">{children}</main>
        <Footer />
      </div>
    </>
  )
}

interface LayoutProps {
  children: any
}

export default Layout
