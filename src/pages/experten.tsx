// import "./experten.css"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import * as React from "react"
import { useState } from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ExpertenPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Experten" />
      <HeaderImage src="/images/bg-3.png" backgroundColor="#FB9D1F" />
      <section className="w-full mt-16">
        <div className="container w-2/3 overflow-hidden">
          <div className="grid grid-rows-3 grid-flow-col rounded-lg overflow-hidden">
            {data.allFile.edges.map(({ node }) => {
              const image = getImage(node.childImageSharp)
              const src = getSrc(node.childImageSharp)
              return (
                <div className="h-96 w-full" key={node.id}>
                  <div className="relative block w-full h-96 overflow-hidden cursor-pointer">
                    <GatsbyImage
                      image={image}
                      alt={node.id}
                      className="w-full relative z-30 hideme"
                    />
                    <div className="w-full absolute hue-rotate-180 top-0 left-0">
                      <div className="absolute z-20 bg-opacity-20 w-full blur bg-white text-center text-white h-20 bottom-0">
                        <h5 className="text-lg text-white flex flex-col">
                          <span className="font-light">Vorname</span>
                          <span className="font-semibold">Nachname</span>
                        </h5>
                      </div>
                      <GatsbyImage
                        image={image}
                        alt={node.id}
                        imgClassName="filter hue-rotate-180 z-10"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
// bild {
//   childImageSharp {
//     gatsbyImageData(width: 300, height: 400)
//   }
// }
// bild_lustig {
//   childImageSharp {
//     gatsbyImageData(width: 300, height: 400)
//   }
// }

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "portraits" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.5
              transformOptions: { fit: INSIDE }
            )
          }
          id
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
            fachgebiete
            kontakt {
              email
            }
          }
        }
      }
    }
  }
`

export default ExpertenPage
