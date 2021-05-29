/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "./footer"
import Header from "./header"
import Instagram from "./instagram"
import WeAre from "./we-are"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      allInstaNode {
        edges {
          node {
            id
            caption
            preview
            permalink
            timestamp
            hashtags
          }
        }
      }
      site {
        siteMetadata {
          author
          repository_url
          bank {
            bic
            iban
            name
          }
          contact {
            bookings
            email
            facebook_handle
            instagram_handle
            twitter_handle
            website
          }
          description
          locations {
            city
            phone
            street
            zip
          }
          title
        }
      }
    }
  `)

  const { siteMetadata } = data.site

  const instagram = [...data.allInstaNode.edges]
  return (
    <>
      <Header siteMetadata={siteMetadata} />
      <main>{children}</main>
      <WeAre />
      <Instagram posts={instagram} />
      <Footer siteMetadata={siteMetadata}></Footer>
    </>
  )
}

// We use the GraphiQL query here

export default Layout
