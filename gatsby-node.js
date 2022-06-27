/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fetch = require("node-fetch")
const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  try {
    const result = await graphql(`
      query ExpertsQuery {
        smallPortraits: allFile(
          filter: { sourceInstanceName: { eq: "portraits" } }
        ) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  transformOptions: { fit: INSIDE }
                  height: 540
                )
              }
              id
              name
              extension
            }
          }
        }
        largePortraits: allFile(
          filter: { sourceInstanceName: { eq: "portraits" } }
        ) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  transformOptions: { fit: INSIDE }
                  height: 1080
                )
              }
              id
              name
              extension
            }
          }
        }
        smallPortraitsFunny: allFile(
          filter: { sourceInstanceName: { eq: "portraits-funny" } }
        ) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  transformOptions: { fit: INSIDE }
                  height: 540
                )
              }
              id
              name
              extension
            }
          }
        }
        largePortraitsFunny: allFile(
          filter: { sourceInstanceName: { eq: "portraits-funny" } }
        ) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  transformOptions: { fit: INSIDE }
                  height: 1080
                )
              }
              id
              name
              extension
            }
          }
        }
        mitarbeiter: allFile(
          filter: { sourceInstanceName: { eq: "mitarbeiter" } }
        ) {
          edges {
            node {
              id
              childMarkdownRemark {
                frontmatter {
                  warenkorb
                  name
                  nachname
                  slug
                  kontakt {
                    email
                    telefon
                    instagram
                    twitter
                  }
                  fachgebiete
                  bilder {
                    bild
                    bild_hover
                  }
                }
                html
              }
              extension
              name
            }
          }
        }
      }
    `)
    if (result.errors) {
      reporter.error("There was an error fetching pages", result.errors)
    }
    const entries = result.data.mitarbeiter.edges
    const template = path.resolve("./src/templates/experte.tsx")

    entries.forEach(({ node }) => {
      const {
        smallPortraits,
        largePortraits,
        smallPortraitsFunny,
        largePortraitsFunny,
      } = result.data

      const getImageFromResult = arr => {
        const results = arr.edges.filter(edge => edge.node.name === node.name)
        return results.length > 0 ? results[0] : null
      }

      const page = {
        path: `/experten/${node.childMarkdownRemark.frontmatter.slug}`,
        component: template,
        context: {
          ...node,
          images: {
            smallPortrait: getImageFromResult(smallPortraits),
            largePortrait: getImageFromResult(largePortraits),
            smallPortraitFunny: getImageFromResult(smallPortraitsFunny),
            largePortraitFunny: getImageFromResult(largePortraitsFunny),
          },
        },
      }
      createPage(page)
    })
  } catch (error) {
    console.log(error)
  }
}
