import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../components/header-image"
import SectionHeadline from "../components/section-headline"

const StandardFormblattPage = props => {
  const content = props.data.allFile.edges[0].node
  const { childrenMarkdownRemark } = content
  const { html } = childrenMarkdownRemark[0]
  return (
    <Layout>
      <SEO title="Standard Formblatt" />
      <HeaderImage banner="Banner_9">
        <SectionHeadline headline="Standard Formblatt" subheadline="" />
        <div
          className="container w-1/2"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </HeaderImage>
    </Layout>
  )
}

// We use the GraphiQL query here
export const query = graphql`
  query StandardFormblattPageQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "pages" }
        name: { eq: "standard-formblatt" }
      }
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

export default StandardFormblattPage
