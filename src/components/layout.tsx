/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"

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
          <main className="pb-16">{props.children}</main>
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
