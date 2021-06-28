import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../components/header-image"
import SectionOffers from "../components/section-offers"
import SectionHeadline from "../components/section-headline"

const AngebotePage = props => {
  const offers = props.data.allOffers.edges.map(({ node }) => node)
  return (
    <Layout>
      <SEO title="Angebote" />
      <HeaderImage banner="Banner_3">
        <SectionHeadline headline="Aktuelle" subheadline="Angebote" />
        <SectionOffers offers={offers} />
      </HeaderImage>
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
