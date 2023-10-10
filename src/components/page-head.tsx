/**
 * PageHead component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function PageHead(props: PageHeadProps) {
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

  const metaTitle = props.title || site.siteMetadata.title
  const metaDescription = props.description || site.siteMetadata.description

  return (
    <>
      <title>{metaTitle.title}</title>
      <meta name="description" content={metaDescription} />
    </>
  )
}

PageHead.defaultProps = {
  lang: `de`,
  meta: [],
  description: ``,
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
