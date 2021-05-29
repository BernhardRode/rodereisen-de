import { graphql } from "gatsby"
import React, { useState } from "react"
import Content from "../components/content"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import SearchEngineOptimization from "../components/seo"
import "./angebote.css"

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5)
}

const OffersPage = (props) => {
  console.log(props.data.allOffers.edges)
  const offers = [
    ...props.data.allOffers.edges.map(({ node }) => ({
      ...node,
    })),
  ]
  // .slice(0, 4)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Layout>
      <SearchEngineOptimization title="Angebote" />
      <PageHeader headertitle="Angebote" background="/images/bg-2.png" />
      <Content>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-9">
            <div className="section-title text-center">
              <h2
                className="title wow animated fadeInUp"
                data-wow-duration="0.6s"
                data-wow-delay="0.1s"
              >
                Perfect Holiday Plan
              </h2>
              <p
                className="wow animated fadeInUp"
                data-wow-duration="0.6s"
                data-wow-delay="0.2s"
              >
                No vis fastidii accumsan, ignota postulant ea mea. Vis et prima
                integre, ei vis ridens moderatius reformidans cu vim doctus
                accumsan ignota.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {offers.map((offer) => (
            <div
              className="col-lg-3 col-sm-6"
              key={`${offer.meta.id}-${offer.meta.index}`}
            >
              <div
                className="single-destinations-list style-two wow animated fadeInUp"
                data-wow-duration="0.4s"
                data-wow-delay="0.1s"
              >
                <div className="thumb">
                  <img src={offer.trip.image} alt="list" />
                </div>
                <div className="details">
                  <p className="location">
                    <img src={"/img/icons/1.png"} alt="map" />
                    {offer.meta.id} - {offer.trip.city}
                  </p>
                  <h4 className="title">
                    {offer.meta.id} - {offer.trip.city}
                  </h4>
                  <p className="content">{offer.trip.duration}</p>
                  <div className="tp-price-meta">
                    <h2>
                      {offer.trip.price} <small>$</small>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Content>
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

export default OffersPage
