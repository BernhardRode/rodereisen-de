/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fetch = require("node-fetch")
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
  const pagesQuery = `
    {
      allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
        edges {
          node {
            dir
            id
            sourceInstanceName
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `

  // const offerTemplate = path.resolve("./src/templates/angebot.tsx")
  // try {
  //   const result = await graphql(`
  //     query OffersQuery {
  //       allOffers {
  //         edges {
  //           node {
  //             meta {
  //               id
  //               index
  //               name
  //               slug
  //             }
  //             trip {
  //               city
  //               description
  //               destination
  //               destinationDescription
  //               duration
  //               final
  //               flight
  //               hotel
  //               image
  //               link
  //               organizer
  //               pkg
  //               price
  //               time(
  //                 locale: ""
  //                 fromNow: false
  //                 formatString: ""
  //                 difference: ""
  //               )
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)
  //   if (result.errors) {
  //     reporter.error("There was an error fetching pages", result.errors)
  //   }
  //   const entries = result.data.allOffers.edges
  //   entries.forEach(context => {
  //     const { slug } = context.node.meta
  //     const page = {
  //       path: `/angebote/${slug}`,
  //       component: offerTemplate,
  //       context: context.node,
  //     }
  //     createPage(page)
  //   })
  // } catch (error) {
  //   console.log(error)
  // }
}
