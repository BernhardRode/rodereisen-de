/**
 * PageHead component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function PageHead({
    title = "",
    lang = "de",
    meta = [],
    description = ``
  }: PageHeadProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <title>{metaTitle.title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="facebook-domain-verification" content="2k0w7zwofj8wlrxqmf6xyg2p901p9v" />
    </>
  )
}

interface PageHeadProps {
  description?: string
  lang?: string
  meta?: MetaWithProperty[] | MetaWithName[]
  title: string
}

interface MetaWithProperty {
  property: string
  content: string
}

interface MetaWithName {
  name: string
  content: string
}

export default PageHead
