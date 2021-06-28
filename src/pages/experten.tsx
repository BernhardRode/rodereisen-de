// import "./experten.css"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import * as React from "react"
import { useState } from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SectionExperten from "../components/section-experten"
import SEO from "../components/seo"

const ExpertenPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Experten" />
      <HeaderImage src="/images/bg-3.png" backgroundColor="#FB9D1F" />
      <SectionExperten data={data} />
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
