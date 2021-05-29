import { graphql, Link } from "gatsby"
import React from "react"
import Content from "../components/content"
import Layout from "../components/layout"
import SearchEngineOptimization from "../components/seo"

const OfferPage = ({ pageContext: { trip, meta } }) => {
  return (
    <Layout>
      <SearchEngineOptimization title="Angebot" />
      <Content>
        <section>
          <h1>{meta.slug}</h1>
          <a href={trip.link}>{trip.link}</a>
          <br />
          <img src={trip.organizer} alt={trip.description} />
          <br />
          <img src={trip.image} alt={trip.description} />
          <br />
          <Link to="/">Go back to the Home</Link>
          <Link to="/angebote/">Go back to the overview</Link>
        </section>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query OfferQuery {
    allOffers {
      edges {
        node {
          meta {
            id
            index
            name
            slug
            uuid
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

export default OfferPage
