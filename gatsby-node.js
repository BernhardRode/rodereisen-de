/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fetch = require("node-fetch")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  try {
    // Fetch the data
    const offers = [
      {
        id: "PRBG-2151",
        cache: true,
        offers: [
          {
            basketId: "PRBG-2151",
            city: "Paguera",
            destination: "Spanien",
            destinationDescription: "Mallorca",
            duration: "7 Tage",
            end: "2021-08-15T00:00:00.000Z",
            facts: [
              "Doppelzimmer",
              "Klimaanlage (warm/kalt)",
              "Bad",
              "WC",
              "Balkon o Terrasse",
            ],
            final: "2 Erwachsene",
            flight: "Flug ab Stuttgart (Economy)",
            hotel: "allsun Hotel Palmira Paradise",
            image:
              "https://i21.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=21982&iid=55736460;",
            link: "83338182",
            offerId: "83338182",
            organizer:
              "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/ALL.gif",
            pkg: "All Inclusive",
            price: 1470,
            slug: "allsun-hotel-palmira-paradise-spanien",
            start: "2021-08-08T00:00:00.000Z",
          },
          {
            basketId: "PRBG-2151",
            city: "Goldstrand",
            destination: "Bulgarien",
            destinationDescription: "Bulgarische Riviera Norden (Varna)",
            duration: "7 Tage",
            end: "2021-08-17T00:00:00.000Z",
            facts: ["Doppelzimmer", "Klimaanlage", "Dusche", "WC", "Balkon"],
            final: "2 Erwachsene",
            flight: "Flug ab Stuttgart (Economy)",
            hotel: "Hotel Kaliakra Palace",
            image:
              "https://i29.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=21982&iid=53184249;",
            link: "83338579",
            offerId: "83338579",
            organizer:
              "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/ALL.gif",
            pkg: "All Inclusive",
            price: 1388,
            slug: "hotel-kaliakra-palace-bulgarien",
            start: "2021-08-10T00:00:00.000Z",
          },
          {
            basketId: "PRBG-2151",
            city: "Goldstrand",
            destination: "Bulgarien",
            destinationDescription: "Bulgarische Riviera Norden (Varna)",
            duration: "7 Tage",
            end: "2021-08-17T00:00:00.000Z",
            facts: [
              "Doppelzimmer",
              "Klimaanlage",
              "Bad oder Dusche",
              "WC",
              "Balkon",
            ],
            final: "2 Erwachsene",
            flight: "Flug ab Stuttgart (Economy)",
            hotel: "Mimosa Sunshine Hotel",
            image:
              "https://i21.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=21982&iid=55732956;",
            link: "83338651",
            offerId: "83338651",
            organizer:
              "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/ALL.gif",
            pkg: "All Inclusive",
            price: 1278,
            slug: "mimosa-sunshine-hotel-bulgarien",
            start: "2021-08-10T00:00:00.000Z",
          },
          {
            basketId: "PRBG-2151",
            city: "Sonnenstrand",
            destination: "Bulgarien",
            destinationDescription: "Bulgarische Riviera Süden (Burgas)",
            duration: "7 Tage",
            end: "2021-08-17T00:00:00.000Z",
            facts: ["Doppelzimmer", "Klimaanlage", "Dusche", "WC", "Balkon"],
            final: "2 Erwachsene",
            flight: "Flug ab Stuttgart (Economy)",
            hotel: "Hotel Diamant Residence",
            image:
              "https://i30.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=21982&iid=55732966;",
            link: "83339119",
            offerId: "83339119",
            organizer:
              "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/ALL.gif",
            pkg: "All Inclusive",
            price: 1334,
            slug: "hotel-diamant-residence-bulgarien",
            start: "2021-08-10T00:00:00.000Z",
          },
          {
            basketId: "PRBG-2151",
            city: "Roda",
            destination: "Griechenland",
            destinationDescription: "Korfu",
            duration: "7 Tage",
            end: "2021-08-24T00:00:00.000Z",
            facts: ["DZ sup renoviert Promo"],
            final: "2 Erwachsene",
            flight: "Flug ab Stuttgart (Economy)",
            hotel: "Angela Beach Superior",
            image:
              "https://i30.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=3959&iid=72370689;",
            link: "83339312",
            offerId: "83339312",
            organizer:
              "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/SLR.gif",
            pkg: "All Inclusive",
            price: 1324,
            slug: "angela-beach-superior-griechenland",
            start: "2021-08-17T00:00:00.000Z",
          },
        ],
      },
      {
        id: "ABCD-1234",
        cache: true,
        offers: [
          {
            basketId: "ABCD-1234",
            city: "Paguera",
            destination: "Spanien",
            destinationDescription: "Mallorca",
            duration: "7 Tage",
            end: "2021-08-15T00:00:00.000Z",
            facts: [
              "Doppelzimmer",
              "Klimaanlage (warm/kalt)",
              "Bad",
              "WC",
              "Balkon o Terrasse",
            ],
            final: "2 Erwachsene",
            flight: "Flug ab Stuttgart (Economy)",
            hotel: "allsun Hotel Palmira Paradise",
            image:
              "https://i21.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=21982&iid=55736460;",
            link: "83338182",
            offerId: "83338182",
            organizer:
              "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/ALL.gif",
            pkg: "All Inclusive",
            price: 1470,
            slug: "allsun-hotel-palmira-paradise-spanien",
            start: "2021-08-08T00:00:00.000Z",
          },
          {
            basketId: "ABCD-1234",
            city: "Goldstrand",
            destination: "Bulgarien",
            destinationDescription: "Bulgarische Riviera Norden (Varna)",
            duration: "7 Tage",
            end: "2021-08-17T00:00:00.000Z",
            facts: ["Doppelzimmer", "Klimaanlage", "Dusche", "WC", "Balkon"],
            final: "2 Erwachsene",
            flight: "Flug ab Stuttgart (Economy)",
            hotel: "Hotel Kaliakra Palace",
            image:
              "https://i29.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=21982&iid=53184249;",
            link: "83338579",
            offerId: "83338579",
            organizer:
              "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/ALL.gif",
            pkg: "All Inclusive",
            price: 1388,
            slug: "hotel-kaliakra-palace-bulgarien",
            start: "2021-08-10T00:00:00.000Z",
          },
          {
            basketId: "ABCD-1234",
            city: "Goldstrand",
            destination: "Bulgarien",
            destinationDescription: "Bulgarische Riviera Norden (Varna)",
            duration: "7 Tage",
            end: "2021-08-17T00:00:00.000Z",
            facts: [
              "Doppelzimmer",
              "Klimaanlage",
              "Bad oder Dusche",
              "WC",
              "Balkon",
            ],
            final: "2 Erwachsene",
            flight: "Flug ab Stuttgart (Economy)",
            hotel: "Mimosa Sunshine Hotel",
            image:
              "https://i21.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=21982&iid=55732956;",
            link: "83338651",
            offerId: "83338651",
            organizer:
              "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/ALL.gif",
            pkg: "All Inclusive",
            price: 1278,
            slug: "mimosa-sunshine-hotel-bulgarien",
            start: "2021-08-10T00:00:00.000Z",
          },
          {
            basketId: "ABCD-1234",
            city: "Sonnenstrand",
            destination: "Bulgarien",
            destinationDescription: "Bulgarische Riviera Süden (Burgas)",
            duration: "7 Tage",
            end: "2021-08-17T00:00:00.000Z",
            facts: ["Doppelzimmer", "Klimaanlage", "Dusche", "WC", "Balkon"],
            final: "2 Erwachsene",
            flight: "Flug ab Stuttgart (Economy)",
            hotel: "Hotel Diamant Residence",
            image:
              "https://i30.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=21982&iid=55732966;",
            link: "83339119",
            offerId: "83339119",
            organizer:
              "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/ALL.gif",
            pkg: "All Inclusive",
            price: 1334,
            slug: "hotel-diamant-residence-bulgarien",
            start: "2021-08-10T00:00:00.000Z",
          },
          {
            basketId: "ABCD-1234",
            city: "Roda",
            destination: "Griechenland",
            destinationDescription: "Korfu",
            duration: "7 Tage",
            end: "2021-08-24T00:00:00.000Z",
            facts: ["DZ sup renoviert Promo"],
            final: "2 Erwachsene",
            flight: "Flug ab Stuttgart (Economy)",
            hotel: "Angela Beach Superior",
            image:
              "https://i30.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=3959&iid=72370689;",
            link: "83339312",
            offerId: "83339312",
            organizer:
              "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/SLR.gif",
            pkg: "All Inclusive",
            price: 1324,
            slug: "angela-beach-superior-griechenland",
            start: "2021-08-17T00:00:00.000Z",
          },
        ],
      },
    ].reduce((total, cur) => {
      return [...total, ...cur.offers]
    }, [])

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
