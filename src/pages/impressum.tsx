import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../components/header-image"
import SectionOffers from "../components/section-offers"
import SectionHeadline from "../components/section-headline"

const ImprintPage = props => {
  const content = props.data.allFile.edges[0].node
  const { childrenMarkdownRemark } = content
  const { html } = childrenMarkdownRemark[0]
  return (
    <Layout>
      <SEO title="Impressum" />
      <HeaderImage banner="Banner_2">
        <SectionHeadline headline="Impressum" subheadline="" />
        <div
          className="container p-4 lg:p-0 lg:w-1/2"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </HeaderImage>
    </Layout>
  )
}

// We use the GraphiQL query here
export const query = graphql`
  query ImpressumPageQuery {
    allFile(
      filter: { sourceInstanceName: { eq: "pages" }, name: { eq: "impressum" } }
    ) {
      edges {
        node {
          id
          name
          childrenMarkdownRemark {
            html
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  }
`

export default ImprintPage
