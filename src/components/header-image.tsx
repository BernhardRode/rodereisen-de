import { graphql, useStaticQuery } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import * as React from "react"

const HeaderImage = (props: HeaderImageProps) => {
  const data = useStaticQuery(graphql`
    query HeaderImagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "banner" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(height: 1024)
            }
            id
            name
            extension
          }
        }
      }
    }
  `)
  const { banner, background, backgroundColor, children } = props

  const bannerIndex = data.allFile.edges.findIndex(
    ({ node }) => node.name === banner
  )
  const { node } = data.allFile.edges[bannerIndex > -1 ? bannerIndex : 0]
  const src = getSrc(node)
  return src ? (
    <>
      <div
        className={`w-full`}
        style={{
          background,
          backgroundColor,
        }}
      >
        <div
          style={{ backgroundImage: `url(${src})`, zIndex: -1 }}
          className={`container bg-cover z-0 h-36 lg:h-96`}
        ></div>
      </div>
      <div className="">{children ? children : null}</div>
    </>
  ) : (
    children
  )
}

interface HeaderImageProps {
  banner: string
  background?: string
  backgroundColor?: string
  children?: any
}

HeaderImage.defaultProps = {
  alt: `Reisebüro Rode GmbH`,
}

export default HeaderImage
