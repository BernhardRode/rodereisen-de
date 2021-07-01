import { graphql } from "gatsby"
import * as React from "react"
import ExpertImageBack from "./experte-image-back"
import ExpertImageFront from "./experte-image-front"

const SectionExperten = ({ data }) => {
  return (
    <section className="w-full">
      <div className="container overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 rounded overflow-hidden">
          {data.allMarkdownRemark.edges
            .filter(({ node }) => node?.frontmatter?.bilder?.bild.length > 0)
            .map((obj, index) => {
              const { node } = obj
              return (
                <div className="aspect-h-4" key={index}>
                  <div className="relative block overflow-hidden">
                    <div className="w-full relative z-30 hideme">
                      <ExpertImageFront experte={node} />
                    </div>
                    <div className="w-full absolute hue-rotate-180 top-0 left-0">
                      <div className="absolute z-20 w-full blur text-center text-white pt-4 pb-4 bottom-0">
                        <h5 className="text-lg text-white flex flex-col">
                          <span className="font-light">
                            {node.frontmatter.name}
                          </span>
                          <span className="font-semibold">
                            {node.frontmatter.nachname}
                          </span>
                        </h5>
                      </div>
                      <div className="z-10">
                        <ExpertImageBack experte={node} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default SectionExperten
