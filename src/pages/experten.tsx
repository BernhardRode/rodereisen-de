import { graphql } from "gatsby"
import * as React from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SectionExperten from "../components/section-experten"
import SectionHeadline from "../components/section-headline"
import PageHead from "../components/page-head"

const ExpertenPage = ({ data }) => {
  return (
    <Layout>
      <PageHead title="Experten" />
      <HeaderImage banner="Banner_5">
        <SectionHeadline
          headline="Unsere Experten"
          subheadline="Sind für Sie da"
        />
        <SectionExperten data={data} />
      </HeaderImage>
    </Layout>
  )
}

export const query = graphql`
  {
    smallPortraits: allFile(
      filter: { sourceInstanceName: { eq: "portraits" } }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.5
              transformOptions: { fit: INSIDE }
              height: 540
            )
          }
          id
          name
          extension
        }
      }
    }
    smallPortraitsFunny: allFile(
      filter: { sourceInstanceName: { eq: "portraits-funny" } }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.5
              transformOptions: { fit: INSIDE }
              height: 540
            )
          }
          id
          name
          extension
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          headings {
            value
          }
          html
          frontmatter {
            warenkorb
            name
            nachname
            slug
            fachgebiete
            kontakt {
              email
            }
            bilder {
              bild
              bild_hover
            }
          }
        }
      }
    }
  }
`

export default ExpertenPage
