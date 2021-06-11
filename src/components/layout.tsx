/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Layout = (props: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="flex flex-col min-h-screen">
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{props.children}</main>
          <Footer siteTitle={data.site.siteMetadata.title} />
        </div>
      </>
    )}
  />
)

interface LayoutProps {
  children: any
}

export default Layout
