import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SectionHeadline from "../components/section-headline"
import SectionStandort from "../components/section-standort"
import PageHead from "../components/page-head"

const StandortePage = ({ data }) => {
  const result = useStaticQuery(graphql`
    query LocationImagesQuery {
      bst: allFile(filter: { sourceInstanceName: { eq: "locations" }, name: { eq: "buero-bst" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(height: 1024)
            }
            id
            name
            extension
          }
        }
      }
      sth: allFile(filter: { sourceInstanceName: { eq: "locations" }, name: { eq: "buero-sth" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(height: 1024)
            }
            id
            name
            extension
          }
        }
      }
    }
  `)
  const [bstImage] = result.bst.edges.map(({ node }) => getImage(node))
  const [sthImage] = result.sth.edges.map(({ node }) => getImage(node))

  return (
    <Layout>
      <PageHead title="Standorte" />
      <HeaderImage banner="Banner_6">
        <div className="container">
          <SectionHeadline headline="unsere" subheadline="standorte" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <SectionStandort
              name="Beilstein"
              phone="+49 (0)7062 94990"
              street="Hauptstrasse 44"
              city="D-71717 Beilstein"
              image={bstImage}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.4578673951423!2d9.3151022!3d49.0399172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47983253abbb429d%3A0xa6f6804736e5bc86!2sReiseb%C3%BCro%20Rode%20GmbH!5e0!3m2!1sde!2sde!4v1624920661739!5m2!1sde!2sde"
              open={[
                "Montag, Dienstag, Donnerstag, Freitag", 
                "09:00 - 18:00 Uhr", 
                "Mittwoch",  
                "09:00 - 15:30 Uhr",
                "Samstag",
                "10:00 - 13:00 Uhr"
              ]}
            />
            <SectionStandort
              name="Steinheim"
              phone="+49 (0)7144 81550"
              street="Friedrichstraße 8"
              city="D-71711 Steinheim"
              image={sthImage}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d598.7486749782171!2d9.278332971778612!3d48.96580047413999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799cd1149209e83%3A0x8bf2cb0c083f2357!2sReiseb%C3%BCro%20Rode%20GmbH!5e0!3m2!1sde!2sde!4v1624920478953!5m2!1sde!2sde"
              open={[
                "Montag, Dienstag, Donnerstag, Freitag", 
                "09:00 - 12:30 Uhr und 13:30 - 18:00 Uhr", 
                "Mittwoch",  
                "09:00 - 12:30 Uhr und 13:30 - 15:00 Uhr",
                "Samstag (Nach Terminverinbarung)",
                "10:00 - 13:00 Uhr"
              ]}
            />
          </div>
        </div>
      </HeaderImage>
    </Layout>
  )
}

export default StandortePage
