import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const ExpertHeaderImage = (props: ExpertHeaderImageProps) => {
  const { back, children, front } = props

  return back && front ? (
    <div className="br-gradient">
      <div className="mt-24 lg:mt-0">
        <div className="container">
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
          </div>
        </div>
      </div>
      <div className="">{children ? children : null}</div>
    </div>
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

export default ExpertHeaderImage
