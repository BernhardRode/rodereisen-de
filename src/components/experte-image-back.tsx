import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const ExpertImageBack = ({ experte }) => {
  const data = useStaticQuery(graphql`
    query PortraitsFunnyQuery {
      allFile(filter: { sourceInstanceName: { eq: "portraits-funny" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1.5
                transformOptions: { fit: INSIDE }
                width: 540
              )
            }
            id
            name
            extension
          }
        }
      }
    }
  `)
  const expertImage = data.allFile.edges.find(
    ({ node }) =>
      `${node.name}.${node.extension}` === experte.frontmatter.bilder.bild_hover
  )
  if (!expertImage || !expertImage.node) {
    return <></>
  }
  const image = getImage(expertImage.node)

  return (
    <GatsbyImage
      image={image}
      alt={`${experte.frontmatter.vorname} ${experte.frontmatter.name}`}
      className=""
    />
  )
}

export default ExpertImageBack
