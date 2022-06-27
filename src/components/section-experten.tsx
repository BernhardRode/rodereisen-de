import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const getImageFromResult = (arr, name) => {
  const results = arr?.filter(
    edge => `${edge.node.name}.${edge.node.extension}` === name
  )
  return results?.length > 0 ? getImage(results[0].node) : null
}

const SectionExperten = ({ data }) => {
  return (
    <section className="w-full">
      <div className="container overflow-hidden">
        <div className="grid grid-cols-3 md:grid-cols-4 rounded overflow-hidden">
          {data.allMarkdownRemark.edges
            .filter(({ node }) => node?.frontmatter?.bilder?.bild.length > 0)
            .map((obj, index) => {
              const { node } = obj
              const front = getImageFromResult(
                data.smallPortraits.edges,
                node?.frontmatter?.bilder?.bild
              )
              const back = getImageFromResult(
                data.smallPortraitsFunny.edges,
                node?.frontmatter?.bilder?.bild_hover
              )
              const alt = `${node.frontmatter.name} ${node.frontmatter.nachname}`

              return (
                <div className="aspect-h-4" key={index}>
                  <a href={`/experten/${node.frontmatter.slug}`}>
                    <div className="relative block overflow-hidden">
                      <div className="w-full relative z-30 hideme">
                        <GatsbyImage image={front} alt={alt} />
                      </div>
                      <div className="w-full absolute top-0 left-0">
                        <div className="absolute z-20 w-full text-center text-white pt-4 pb-4 bottom-0">
                          <h5 className="text-xl md:text-5xl text-white flex flex-col">
                            <span className="font-light">
                              {node.frontmatter.name}
                            </span>
                            <span className="font-semibold">
                              {node.frontmatter.nachname}
                            </span>
                          </h5>
                        </div>
                        <div className="z-10">
                          <GatsbyImage image={back} alt={alt} />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default SectionExperten
