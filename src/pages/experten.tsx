// import "./experten.css"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import * as React from "react"
import { useState } from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SectionExperten from "../components/section-experten"
import SectionHeadline from "../components/section-headline"
import SEO from "../components/seo"

const ExpertenPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Experten" />
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
