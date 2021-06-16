import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../components/header-image"
import SectionOffers from "../components/section-offers"

const AngebotePage = props => {
  const offers = [
    ...props.data.allOffers.edges.map(({ node }) => ({
      ...node,
    })),
  ]

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
          meta {
            id
            index
            name
            slug
          }
          trip {
            city
            description
            destination
            destinationDescription
            duration
            final
            flight
            hotel
            image
            link
            organizer
            pkg
            price
            time(locale: "", fromNow: false, formatString: "", difference: "")
          }
        }
      }
    }
  }
`

export default AngebotePage
