/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fetch = require("node-fetch")
const path = require("path")
const { getOffers } = require("./parser.js")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  try {
    // const url = "http://0.0.0.0:7071/api/offers?id="
    const baskets = ["PRBG-2151"]
    const offers = []

    for (const id in baskets) {
      const basket = await getOffers(baskets[id])
      // const req = await fetch(`${url}${baskets[id]}`)
      // const basket = await req.json()
      basket.offers.forEach(offer => offers.push(offer))
    }

    offers.forEach((offer, index) => {
      const id = createNodeId(`${offer.slug}-${index}`)
      const node = {
        ...offer,
        id,
        internal: {
          type: "Offers",
          contentDigest: createContentDigest(offer), // We pass in the game object to make sure it's unique
        },
      }
      // Create the actual data node
      actions.createNode(node)
    })
  } catch (error) {
    console.log(error)
  }
}

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
