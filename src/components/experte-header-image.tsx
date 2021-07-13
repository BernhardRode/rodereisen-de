import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const ExpertHeaderImage = (props: ExpertHeaderImageProps) => {
  const { alt, back, children, front } = props

  return back && front ? (
    <>
      <div className="container mt-24 lg:mt-0">
        <div className="flex flex-row flex-grow" style={{ height: `48rem` }}>
          <div
            className="flex-1 bg-no-repeat bg-cover h-96 lg:h-auto"
            style={{
              backgroundImage: `url(${front})`,
              // clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
            }}
          ></div>
          <div
            className="flex-1 bg-no-repeat bg-cover h-96 lg:h-auto"
            style={{
              backgroundImage: `url(${back})`,
              // clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
            }}
          ></div>
          {/* <GatsbyImage image={front} alt={alt} /> */}
          {/* <GatsbyImage image={back} alt={alt} /> */}
        </div>
      </div>
      <div className="">{children ? children : null}</div>
    </>
  ) : (
    children
  )
}

interface ExpertHeaderImageProps {
  alt: string
  front: any
  back: any
  children?: any
}

ExpertHeaderImage.defaultProps = {
  alt: `Reisebüro Rode GmbH`,
}

export default ExpertHeaderImage
