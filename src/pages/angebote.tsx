import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../components/header-image"
import SectionOffers from "../components/section-offers"

const AngebotePage = props => {
  const offers = props.data.allOffers.edges.map(({ node }) => node)
  console.log({ offers })
  return (
    <Layout>
      <SEO title="Angebote" />
      <HeaderImage src="/images/bg-1.png" backgroundColor="#745F90" />
      <SectionOffers offers={offers} />
    </Layout>
  )
}

// We use the GraphiQL query here
export const query = graphql`
  query OffersQuery {
    allOffers {
      edges {
        node {
          basketId
          city
          destination
          destinationDescription
          duration
          end
          facts
          final
          flight
          hotel
          image
          link
          offerId
          organizer
          pkg
          price
          slug
          start
        }
      }
    }
  }
`

export default AngebotePage
