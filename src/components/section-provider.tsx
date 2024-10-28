import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const SectionAnbieter = () => {
  const data = useStaticQuery(graphql`
    query AnbieterImagesQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "provider" }
          name: { eq: "provider" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(height: 100)
            }
            id
            name
            extension
          }
        }
      }
    }
  `)
  const [file] = data.allFile.edges.map(({ node }) => node)
  const image = getImage(file)

  return (
    <section className="w-full pb-4 lg:pb-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div className="items-center pt-16 p-4 lg:p-0">
            Image1
          </div>
          <div className="items-center pt-16 p-4 lg:p-0">
            Image2
          </div>
          <div className="items-center pt-16 p-4 lg:p-0">
            Image3
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAnbieter
