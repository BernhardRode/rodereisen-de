import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SectionHeadline from "../components/section-headline"
import SectionStandort from "../components/section-standort"
import SEO from "../components/seo"

const StandortePage = ({ data }) => {
  const images = useStaticQuery(graphql`
    query LocationImagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "locations" } }) {
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
  const [sthImage, bstImage] = images.allFile.edges.map(({ node }) =>
    getImage(node)
  )

  const openDaysBst = [1, 2, 3, 4, 5]
  const openHoursBst = [10, 11, 12, 13, 14, 15, 16]
  const openDaysSth = [1, 2, 3, 4, 5]
  const openHoursSth = [10, 11, 12, 14, 15, 16]

  return (
    <Layout>
      <SEO title="Standorte" />
      <HeaderImage banner="Banner_8">
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
              openHours={openHoursBst}
              openDays={openDaysBst}
            />
            <SectionStandort
              name="Steinheim"
              phone="+49 (0)7144 81550"
              street="Friedrichstraße 8"
              city="D-71711 Steinheim"
              image={sthImage}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d598.7486749782171!2d9.278332971778612!3d48.96580047413999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799cd1149209e83%3A0x8bf2cb0c083f2357!2sReiseb%C3%BCro%20Rode%20GmbH!5e0!3m2!1sde!2sde!4v1624920478953!5m2!1sde!2sde"
              openHours={openHoursSth}
              openDays={openDaysSth}
            />
          </div>
          <SectionHeadline headline="unsere" subheadline="öffnungszeiten" />
          <div className="grid grid-cols-7 gap-0 rounded-xl overflow-hidden">
            <div className="text-center bg-gray-100 p-5">&nbsp;</div>
            <div className="text-center bg-gray-100 p-5">Montag</div>
            <div className="text-center bg-gray-100 p-5">Dienstag</div>
            <div className="text-center bg-gray-100 p-5">Mittwoch</div>
            <div className="text-center bg-gray-100 p-5">Donnerstag</div>
            <div className="text-center bg-gray-100 p-5">Freitag</div>
            <div className="text-center bg-gray-100 p-5">Samstag</div>
            {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(hour => (
              <>
                <div className="bg-gray-100 pl-4">
                  {hour}.00 Uhr
                  <br /> {hour + 1}.00 Uhr
                </div>
                {[1, 2, 3, 4, 5, 6].map(day => (
                  <div className="flex flex-row text-xs text-center content-center items-center">
                    <div
                      className={`flex-grow rounded-tl-lg rounded-bl-lg p-2 ml-2 mr-0 ${
                        openHoursBst.indexOf(hour) > -1 &&
                        openDaysBst.indexOf(day) > -1
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      Beilstein
                    </div>
                    <div
                      className={`flex-grow rounded-tr-lg rounded-br-lg p-2 ml-0 mr-2 ${
                        openHoursSth.indexOf(hour) > -1 &&
                        openDaysBst.indexOf(day) > -1
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      Steinheim
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </HeaderImage>
    </Layout>
  )
}

export default StandortePage
