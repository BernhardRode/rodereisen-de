import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import * as React from "react"

export interface Walltile {
  colspan?: number
  src?: string
  type: "image" | "text"
}

const Wall = () => {
  const data = useStaticQuery(graphql`
    query TilesImagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "tiles" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 300, height: 400)
            }
            id
            name
            extension
          }
        }
      }
    }
  `)

  const sorted = data.allFile.edges.sort(
    (a, b) => parseInt(a.node.name) - parseInt(b.node.name)
  )
  const tiles = sorted.map(({ node }) => getImage(node))

  // console.log(tiles)
  return (
    <div className="container pt-40 bg-white">
      <div className="rounded-xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-0 ">
          {tiles.map((tile, index) => (
            <div
              key={index}
              className={`block bg-cover bg-no-repeat h-72 aspect-w-3`}
              style={{ backgroundImage: `url(${tile})` }}
            >
              <GatsbyImage image={tile} alt="Reisebüro Rode Gmbh" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface WallProps {
  tiles?: Walltile[]
}

Wall.defaultProps = {
  tiles: ``,
}

export default Wall
