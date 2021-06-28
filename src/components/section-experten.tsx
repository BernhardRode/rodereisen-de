import { graphql } from "gatsby"
import * as React from "react"
import ExpertImageBack from "./experte-image-back"
import ExpertImageFront from "./experte-image-front"

const SectionExperten = ({ data }) => {
  return (
    <section className="w-full mt-16">
      <div className="container w-2/3 overflow-hidden">
        <div className="grid grid-rows-3 grid-flow-col rounded-lg overflow-hidden">
          {data.allMarkdownRemark.edges
            .filter(({ node }) => node?.frontmatter?.bilder?.bild.length > 0)
            .map((obj, index) => {
              const { node } = obj
              return (
                <div className="h-96 w-full" key={index}>
                  <div className="relative block w-full h-96 overflow-hidden cursor-pointer">
                    <div className="w-full relative z-30 hideme">
                      <ExpertImageFront experte={node} />
                    </div>
                    <div className="w-full absolute hue-rotate-180 top-0 left-0">
                      <div className="absolute z-20 bg-opacity-20 w-full blur bg-white text-center text-white h-20 bottom-0">
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
